import React, { useState } from 'react'
import CmsNavbar from '../../components/cmsNavbar/CmsNavbar'
import { GET_CLIENT } from '../../../graphQl/queries'
import { useQuery, useMutation } from '@apollo/client'
import EditButton from '../../components/Buttons/EditButton'
import DeleteButton from '../../components/Buttons/DeleteButton'
import { USER_DELETE } from '../../../graphQl/mutations'


const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENT);
  const [userDelete] = useMutation(USER_DELETE, {
    refetchQueries: [{ query: GET_CLIENT }]
  });
  const [message, setMessage] = useState('');
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Erreur :</p>;

  const { userGetByRole } = data;

   const handleDelete = async (userId) => {
    setShowConfirmationModal(true);
    setSelectedUserId(userId);
   };

   const confirmDelete = async (userId) => {
    try {
      await userDelete({
        variables: {
          id: userId,
        },
      });
    // Affiche un message de confirmation
    setMessage("L'utilisateur a été supprimé avec succès.");
    setShowConfirmationModal(false);
  } catch (error) {
    // Affiche un message d'erreur
    setMessage("Une erreur s'est produite lors de la suppresion de l'utilisateur")
    console.log(error.graphQLErrors)
    }
  }

  return (
    <>
      <CmsNavbar />
      <div className='dashboard'>
        <div className="title">
          <h1>Clients</h1>
        </div>
        {message && (
            <p className={message.includes('succès') ? 'success-message' : 'error-message'}>
              {message}
            </p>
          )}

        <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Allergie</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userGetByRole.map(user => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.allergy}</td>
              <td className='action__column'>
                <EditButton to={`/dashboard/edit-user/${user.id}`}/>
                <DeleteButton onClick={() => handleDelete(user.id)}/>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>

      {showConfirmationModal && (
        <div className="confirmation-modal">
          <div className="confirmation-modal-content">
            <p>Êtes-vous sûr de vouloir supprimer cet utilisateur ?</p>
            <div className='buttons'>
              <button className='confirm-btn' onClick={() => confirmDelete(selectedUserId)}>Confirmer</button>
              <button className='cancel-btn' onClick={() => setShowConfirmationModal(false)}>Annuler</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Clients