import React from 'react'
import './Login.css'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import { Link } from 'react-router-dom'

const login = () => {
  return (
    <div className="wrapper login">
        <div className="container">
          <div className="col-left">
            <div className="login-text">
              <h2>Bienvenue !</h2>
              <p>Créez votre compte gratuitement</p>
              <a href="" className="btn">S'inscrire</a>
            </div>
          </div>

          <div className="col-right">
            <div className="login-form">
              <h2>Connexion</h2>
              <form action="">
                <p>
                  <label>Adresse mail</label>
                  <input type="text" placeholder="Votre adresse mail" required />
                </p>
                <p>
                  <label>Mot de passe</label>
                  <input type="password" placeholder="Votre mot de passe" required />
                </p>	
                <p>
                  <input type="submit" value="Se Connecter" />
                </p>	
                <p>
                  <a href="">Mot de passe oublié ?</a>
                </p>
              </form>
            </div>
          </div>
          <Link to='/'><MdOutlineRestaurantMenu className='close-icon' /></Link>
        </div>
      </div>
  )
}

export default login