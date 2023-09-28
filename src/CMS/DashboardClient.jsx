import React, { useState, useContext, useEffect } from 'react'
import {MdLogout} from 'react-icons/md'
import { GET_USER_BY_ID } from '../graphQl/queries';
import { AppContext } from '../apollo';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';

const DashboardClient = () => {
  const { role, user } = useContext(AppContext);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
   const token = localStorage.getItem('token');
   if(!token) {
     navigate('/login');
     return;
   }
   setAuthenticated(true);
  }, [navigate]);

  
  const { loading, data, error  } = useQuery(GET_USER_BY_ID, {
    variables: {
      id: user?.id,
      role: user?.role
    },
    skip: !user
  });
  
  if (loading) {return <p>Loading...</p>}
  
  if (error) {return <p>Une erreur est survenue.</p>}
  
  if(!authenticated) {
   return null;
  }

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = 'login';
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

      <div className='dashboard'>
        {data?.getUserById ? (
          <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                  <th>Prénom</th>
                  <th>Nom</th>
                  <th>Allergie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{data.getUserById.id}</td>
                  <td>{data.getUserById.email}</td>
                  <td>{data.getUserById.firstName}</td>
                  <td>{data.getUserById.lastName}</td>
                  <td>{data.getUserById.allergy}</td>
                </tr>
              </tbody>
            </table>
        ): (
          <p>Aucune donnée utilisateur trouvée.</p>
        )}
      </div>
    </>
  )
}

export default DashboardClient