import React from 'react'
import CmsNavbar from '../../components/cmsNavbar/CmsNavbar'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import { GET_TABLES } from '../../../graphQl/queries'
import EditButton from '../../components/Buttons/EditButton'
import DeleteButton from '../../components/Buttons/DeleteButton'


const Tables = () => {
  const { loading: queryLoading, error, data, fetchMore } = useQuery(GET_TABLES,{
    variables: { skip: 0, take: 10, sortBy : ''}
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

  if (queryLoading) return <p>Loading...</p>;
  if (error) return <p>Erreur :</p>;
  return (
    <>
      <CmsNavbar />
      <div className='dashboard'>
        <div className="title">
          <h1>Les Tables</h1>
        </div>
          <button className='dashboard__button'>
            <Link to="/dashboard/add-table">Ajouter une table</Link>
          </button>

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
                    <DeleteButton />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className='dashboard__button' onClick={loadMore}>Afficher plus de tables</button>

      </div>
    </>
  )
}

export default Tables