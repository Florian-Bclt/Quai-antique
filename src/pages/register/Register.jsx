import React, { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import { USER_CREATE, UserRole } from "../../graphQl/mutations";
import { GET_CLIENT } from "../../graphQl/queries";
import { Link } from "react-router-dom";
import './Register.css';
import {MdOutlineRestaurantMenu} from 'react-icons/md'

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [allergy, setAllergy] = useState('');
  const [role, setRole] = useState(UserRole.CLIENT);

  const [userCreate] = useMutation(USER_CREATE, {
    refetchQueries: { query: GET_CLIENT }});
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const { data } = await userCreate({
      variables: {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        allergy: allergy,
        role: role,
      },
    });

    const createdUser = data.userCreate.user;
    console.log(createdUser);
    // Réinitialiser le formulaire après la création de l'utilisateur
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setAllergy('');
    setRole(UserRole.CLIENT);
    // Affiche un message de confirmation
    setMessage("L'utilisateur a été créé avec succès.");
  } catch (error) {
    // Affiche un message d'erreur
    setMessage("Une erreur s'est produite lors de la création de l'utilisateur")
    console.log(error.graphQLErrors)
  }; }

  return (
    <div className="register__container">
      <div className="register__header">
        <Link to='/login'><MdOutlineRestaurantMenu className='register__form-close-icon' /></Link>
        <h2>Formulaire d'inscription</h2>
        <form className="register__form" onSubmit={handleSubmit}>
        <p>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete='email'
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
              <label htmlFor="firstName">Nom:</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                autoComplete='firstName'
              />
            </p>
            <p>
              <label htmlFor="lastName">Prénom:</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                autoComplete='lastName'
              />
            </p>
            <p>
              <label htmlFor="allergy">Allergie:</label>
              <input
                type="text"
                id="allergy"
                value={allergy}
                onChange={(e) => setAllergy(e.target.value)}
                autoComplete='allergy'
              />
            </p>
            <p>
              <label htmlFor="role">Role:</label>
              <select name='role' value={role} onChange={(e) => setRole(e.target.value)}>
                <option value={UserRole.CLIENT} defaultValue>CLIENT</option>
                <option value={UserRole.ADMIN} defaultValue>ADMIN</option>
              </select>
            </p>
          <button className="register__btn" type="submit">S'inscrire</button>
        </form>
        {message && (
            <p className={message.includes('succès') ? 'success-message' : 'error-message'}>
              {message}
            </p>
          )}
      </div>
    </div>
  )
}

export default Register;