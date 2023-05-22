import React, { useContext } from 'react'
import {MdLogout} from 'react-icons/md'
import { GET_USER_BY_ID } from '../graphQl/queries';
import { useQuery } from '@apollo/client';
import { AppContext } from '../apollo';

const DashboardClient = () => {
  const { user } = useContext(AppContext);

  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: {
      id: user?.id, 
      role: user?.role
    },
    skip: !user,
  });
  
  if (!user) {
    return <p style={{ color : 'white'}}>Utilisateur non trouvé.</p>
  }

  if (loading) return <p>Loading...</p>

  if (error) return <p>Une erreur est survenue.</p>
  
  const userData = data?.getUserById;

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <>
      <nav className='app__navbar'>
      <button onClick={logout} className='app__navbar-logout p__opensans' 
        style={{
          backgroundColor: 'transparent', 
          border: 'none', 
          fontSize: '1.5em', 
          cursor: 'pointer' }}
        >
          <MdLogout/>
        </button>
      </nav>

      <div className='p__opensans'>
      <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Allergy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.allergy}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default DashboardClient