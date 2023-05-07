import React, { useState } from 'react'
import './AddMember.css'
import CmsNavbar from '../../components/cmsNavbar/CmsNavbar'
import { useMutation } from '@apollo/client';
import { USER_CREATE } from '../../../graphQl/mutations';

const AddMember = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');
  const [userCreate] = useMutation(USER_CREATE);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await userCreate({
      variables: {
        email,
        password,
        firstName,
        lastName,
        role: role,
      },
    });
    console.log(data);
    // Réinitialiser le formulaire après la création de l'utilisateur
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setRole();
  };

  return (
    <>
      <CmsNavbar />
      <div className='dashboard'>
        <div className="title">
          <h1>Ajouter un membre au personnel</h1>
        </div>
      <div className="register__container">
        <div className="register__header">
          <h1 style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '1em',
            textDecoration: 'underline 2px var(--color-golden)'
          }}>
            Création d'un membre
          </h1>
          <form onSubmit={handleSubmit} className='register__form'>
            <p>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </p>
            <p>
              <label htmlFor="password">Mot de passe:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </p>
            <p>
              <label htmlFor="firstName">Prénom:</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </p>
            <p>
              <label htmlFor="lastName">Nom de famille:</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </p>
            <p>
              <label htmlFor="role">Role:</label>
              <select name='role' value={role} onChange={(e) => setRole(e.target.value)}>
                <option value='client'>Client</option>
                <option value='admin'>Admin</option>
                <option value='manager'>Manager</option>
              </select>
            </p>
            <button type="submit" className='register__btn' style={{ marginTop: '1em'}}>Créer l'utilisateur</button>
          </form>
        </div>
      </div>  
      </div>
    </>
  )
}

export default AddMember