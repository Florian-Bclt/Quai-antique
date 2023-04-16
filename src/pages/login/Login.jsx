import React, { useContext, useState } from 'react'
import './Login.css'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../context/authContext";
import { useForm } from '../../utility/hooks';
import { useMutation } from "@apollo/react-hooks";
import { gql } from 'graphql-tag';

// const LOGIN_USER = gql`
//   mutation login(
//     $loginInput: LoginInput
//   ) {
//     loginUser(
//       loginInput: $loginInput
//     ) {
//       email
//       username
//       token
//     } 
//   }
// `

function Login(props) {
  // let navigate = useNavigate();
  // const context = useContext(AuthContext);
  // const [errors, setErrors] = useState([]);

  // function loginUserCallback() {
  //   loginUser();
  // }

  // const { onChange, onSubmit, values } = useForm(loginUserCallback, {
  //   email: '',
  //   password: ''
  // });

  // const [loginUser, { loading }] = useMutation(LOGIN_USER, {
  //   update(proxy, { data: { loginUser: userData }}) {
  //     context.login(userData);
  //     navigate('/dashboard');
  //   },
  //   onError({ graphQLErrors }) {
  //     setErrors(graphQLErrors);
  //   },
  //   variables: { loginInput: values }
  // })

  return (
    <div className="wrapper login">
        <div className="container">
          <div className="col-left">
            <div className="login-text">
              <h2>Bienvenue !</h2>
              <p>Créez votre compte gratuitement</p>
              <Link to="/register" className="btn">S'inscrire</Link>
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
                  <input type="password" placeholder="Votre mot de passe"  required />
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

export default Login