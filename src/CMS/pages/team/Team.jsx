import React, { useState } from 'react'
import CmsNavbar from '../../components/cmsNavbar/CmsNavbar'
import { Link } from 'react-router-dom'
import { GET_TEAM } from '../../../graphQl/queries'
import EditButton from '../../components/Buttons/EditButton'
import DeleteButton from '../../components/Buttons/DeleteButton'
import { useMutation, useQuery } from '@apollo/client'
import { MdPersonAdd } from 'react-icons/md'
import { USER_DELETE } from '../../../graphQl/mutations'

const Team = () => {
  const { loading: queryLoading, error, data } = useQuery(GET_TEAM);
  const [userDelete] = useMutation(USER_DELETE, {
    refetchQueries: [{ query: GET_TEAM }]
  });
  const [message, setMessage] = useState('');

  if (queryLoading) return <p>Loading...</p>;
  if (error) return <p>Erreur :</p>;

  const { userGetByRoles } = data;

  const handleDelete = async (userId) => {
    try {
      await userDelete({
        variables: {
          id: userId,
        },
      });
    // Affiche un message de confirmation
    setMessage("L'utilisateur a été supprimé avec succès.");
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
          <h1>Le Personnel</h1>
        </div>
      <button className='dashboard__button'>
        <Link to="/dashboard/add-member">Ajouter un membre <MdPersonAdd style={{ fontSize:"1.3em"}}/></Link>
      </button>

        <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userGetByRoles.map(user => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td className={user.role === 'admin' ? 'admin' : 'manager'}>{user.role}</td>
              <td className='action__column'>
                <EditButton to={`/dashboard/edit-user/${user.id}`}/>
                <DeleteButton onClick={() => handleDelete(user.id)}/>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
        {message && (
            <p className={message.includes('succès') ? 'success-message' : 'error-message'}>
              {message}
            </p>
          )}
      </div>
    </>
  )
}

export default Team