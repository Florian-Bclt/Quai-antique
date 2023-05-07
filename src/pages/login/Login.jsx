import React, { useEffect, useState } from 'react'
import './Login.css'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { LOGIN_MUTATION } from '../../graphQl/mutations'
import { useMutation } from '@apollo/client';
import { useContext } from 'react'
import { AppContext } from '../../apollo'


function Login() {
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [authLogin] = useMutation(LOGIN_MUTATION);
  const { setUser } = useContext(AppContext);

  useEffect(() => {
    setErrMsg('');
  }, [username, password]) 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = await authLogin({
        variables: { username, password }
      });
      const { accessToken, role, user } = token.data.authLogin;
      console.log('role', role)
      localStorage.setItem('token', accessToken);

      setUser(user);

      if (role === 'admin' || role === 'manager') {
        navigate('/dashboard', { replace: true });
      } else if (role === 'client') {
        navigate('/dashboard-client', { replace: true});
      } else {
        navigate('/register', { replace: true })
      }
    } catch (error) {
      if (error.status === 400) {
        setErrMsg('Email et/ou mot de passe incorrect.');
      } else if (error.response?.status === 401) {
        setErrMsg("Vous n'avez pas les autorisations requises.");
      } else {
        setErrMsg('Connexion échouée.');
      }
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

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

                  <form onSubmit={handleSubmit}>
                    <p>
                      <label htmlFor="username">Adresse mail</label>
                      <input 
                        type="text"
                        placeholder="Votre adresse mail" 
                        id='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required 
                      />
                    </p>
                    <p>
                      <label htmlFor='password'>Mot de passe</label>
                      <input 
                        type="password"
                        placeholder="Votre mot de passe" 
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </p>	

                    <p  className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive' style={{ color: 'red', fontSize: '0.8em'}}>{errMsg}</p>
                    <p>
                      <button type="submit" disabled={loading}>{loading ? 'Connexion en cours...' : 'Se Connecter'}</button>
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