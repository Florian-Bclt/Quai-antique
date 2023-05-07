import React from 'react'
import CmsNavbar from '../../components/cmsNavbar/CmsNavbar'
import { GET_CLIENT } from '../../../graphQl/queries'
import { useQuery } from '@apollo/client'
import EditButton from '../../components/Buttons/EditButton'
import DeleteButton from '../../components/Buttons/DeleteButton'

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Erreur :</p>;

  const { userGetByRole } = data;
  return (
    <>
      <CmsNavbar />
      <div className='dashboard'>
        <div className="title">
          <h1>Clients</h1>
        </div>

        <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
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
                <DeleteButton />
              </td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </>
  )
}

export default Clients