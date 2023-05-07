import React from 'react'
import CmsNavbar from '../../components/cmsNavbar/CmsNavbar'
import { Link } from 'react-router-dom'
import { GET_TEAM } from '../../../graphQl/queries'
import EditButton from '../../components/Buttons/EditButton'
import DeleteButton from '../../components/Buttons/DeleteButton'
import { useQuery } from '@apollo/client'
import { MdPersonAdd } from 'react-icons/md'

const Team = () => {
  const { loading: queryLoading, error, data } = useQuery(GET_TEAM);

  if (queryLoading) return <p>Loading...</p>;
  if (error) return <p>Erreur :</p>;

  const { userGetByRoles } = data;

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
            <th>First Name</th>
            <th>Last Name</th>
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

export default Team