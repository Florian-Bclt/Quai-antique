import React, { useState } from 'react'
import CmsNavbar from '../../components/cmsNavbar/CmsNavbar'
import { useMutation, useQuery } from '@apollo/client'
import { GET_TABLES } from '../../../graphQl/queries'
import EditButton from '../../components/Buttons/EditButton'
import DeleteButton from '../../components/Buttons/DeleteButton'
import { TABLE_CREATE } from '../../../graphQl/mutations'
import { TABLE_DELETE } from '../../../graphQl/mutations'

const Tables = () => {
  const { loading: queryLoading, error, data, fetchMore } = useQuery(GET_TABLES,{
    variables: { skip: 0, take: 10, sortBy : ''}
  });

  const [tableDelete] = useMutation(TABLE_DELETE, {
    refetchQueries: [{ query: GET_TABLES }]
  });
  const [message, setMessage] = useState('');
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedTableId, setSelectedTableId] = useState(null);
  const [title, setTitle] = useState('');
  const [places, setPlaces] = useState(0);
  const [available, setAvailable] = useState(true);

  const [tableCreate] = useMutation(TABLE_CREATE, {
    refetchQueries: [{ query: GET_TABLES }],
  });
  
  const loadMore = () => {
    fetchMore({
      variables: {
        skip: data.nodes.length,
        take: 10,
        sortBy: ''
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          tablesPagination: {
            ...prev.tablesPagination,
            nodes: [...prev.tablesPagination.nodes, ...fetchMoreResult.tablesPagination.nodes]
          }
        });
      }
    });
  };

  const handleDelete = async (tableId) => {
    setShowConfirmationModal(true);
    setSelectedTableId(tableId);
   };

   const confirmDelete = async (tableId) => {
    try {
      await tableDelete({
        variables: {
          id: tableId,
        },
      });
    // Affiche un message de confirmation
    setMessage("La table a été supprimé avec succès.");
    setShowConfirmationModal(false);
  } catch (error) {
    // Affiche un message d'erreur
    setMessage("Une erreur s'est produite lors de la suppresion de la table")
    console.log(error.graphQLErrors)
    }
  }

  const handleCreateModalOpen = () => {
    setShowCreateModal(true);
  };

  const handleCreateModalClose = () => {
    setShowCreateModal(false);
  };

  const handleCreateFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await tableCreate({
        variables: {
          title: title,
          places: places,
          available: available,
        }});

        const createdTable = data.tableCreate.table;
        console.log(createdTable);
        setTitle('');
        setPlaces(0);
        setAvailable(true);
      // Cacher la modale de création
      setShowCreateModal(false);
      // Afficher un message de confirmation
      setMessage('La table a été créée avec succès.');
    } catch (error) {
      // Afficher un message d'erreur
      setMessage("Une erreur s'est produite lors de la création de la table");
      console.log(error.graphQLErrors);
    }
  };

  if (queryLoading) return <p>Loading...</p>;
  if (error) return <p>Erreur :</p>;
  return (
    <>
      <CmsNavbar />
      <div className='dashboard'>
        <div className="title">
          <h1>Les Tables</h1>
        </div>
        <div>
          <button className='dashboard__button' onClick={handleCreateModalOpen}>
            Ajouter une table
          </button>
          {message && (
            <p className={message.includes('succès') ? 'success-message' : 'error-message'}>
              {message}
            </p>
          )}
        </div>
          <table>
            <thead>
              <tr>
                <th>Nom de la table</th>
                <th>Nombre de places</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.tablesPagination.nodes.map((table) => (
                <tr key={table.id}>
                  <td>{table.title}</td>
                  <td>{table.places}</td>
                  <td>{table.available ? 'Disponible' : 'Réservée'}</td>
                  <td className='action__column'>
                    <EditButton to={`/dashboard/edit-table/${table.id}`}/>
                    <DeleteButton onClick={() => handleDelete(table.id)}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className='dashboard__button' onClick={loadMore}>Afficher plus de tables</button>
      </div>

{/* MODAL DE SUPPRESSION DE TABLE */}
      {showConfirmationModal && (
        <div className="confirmation-modal">
          <div className="confirmation-modal-content">
            <p>Êtes-vous sûr de vouloir supprimer cet table ?</p>
            <div className='buttons'>
              <button className='confirm-btn' onClick={() => confirmDelete(selectedTableId)}>Confirmer</button>
              <button className='cancel-btn' onClick={() => setShowConfirmationModal(false)}>Annuler</button>
            </div>
          </div>
        </div>
      )}

{/* MODAL de CREATION DE TABLE */}
      {showCreateModal && (
        <div className="confirmation-modal">
          <div className="confirmation-modal-content create_modal">
            <h2>Créer une table</h2>
            <form onSubmit={handleCreateFormSubmit}>
              <div>
                <label htmlFor="title">Nom de la table:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="places">Nombre de places:</label>
                <input
                  type="number"
                  id="places"
                  name="places"
                  value={places}
                  onChange={(e) => setPlaces(Number(e.target.value))}
                />
              </div>
              <div>
                <label htmlFor="available">Disponible:</label>
                <input
                  type="checkbox"
                  id="available"
                  name="available"
                  checked={available}
                  onChange={(e) => setAvailable(e.target.checked)}
                />
              </div>
              <div className="buttons">
                <button type="submit" className="confirm-btn">Créer</button>
                <button type="button" className="cancel-btn" onClick={handleCreateModalClose}>
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Tables