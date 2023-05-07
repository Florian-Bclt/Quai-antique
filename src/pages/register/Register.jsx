import { gql } from 'graphql-tag';
import { Link } from "react-router-dom";
import './Register.css';
import {MdOutlineRestaurantMenu} from 'react-icons/md'

// const REGISTER_USER = gql`
//   mutation Mutation(
//     $registerInput: RegisterInput
//   ) {
//     registerUser(
//       registerInput: $registerInput
//     ) {
//       email
//       username
//       token
//     }
//   }
// `

function Register(props) {
  // const context = useContext(AuthContext);
  // let navigate = useNavigate();
  // const [errors, setErrors] = useState([]);

  // function registerUserCallback() {
  //   console.log('Callback hit');
  //   registerUser();
  // }

  // const { onChange, onSubmit, values } = useForm(registerUserCallback, {
  //   username: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: ''
  // })

  // const [ registerUser, { loading } ] = useMutation(REGISTER_USER, {
  //   update(proxy, { data: { registerUser: userData }}) {
  //     context.login(userData);
  //     navigate('/');
  //   },
  //   onError({ graphQLErrors }) {
  //     setErrors(graphQLErrors);
  //   },
  //   variables: { registerInput: values }
  // });

  return (
    <div className="register__container">
      <div className="register__header">
        <Link to='/login'><MdOutlineRestaurantMenu className='register__form-close-icon' /></Link>
        <h2>Formulaire d'inscription</h2>
        <form className="register__form" action=''>
          <p>
            <label>Nom</label>
            <input label="Lastname" name="lastname" required/>
          </p>
          <p>
            <label>Prénom</label>
            <input label="Firstname" name="firstname" required/>
          </p>
          <p>
            <label>Email</label>
            <input label="Email" name="email" required/>
          </p>
          <p>
            <label>Mot de passe</label>
            <input label="Password" name="password" required/>
          </p>
          <p>
            <label>Confirmation du mot de passe</label>
            <input label="Confirm password" name="confirmPassword" required/>
          </p>
        </form>
        <button className="register__btn" onClick={onsubmit}>S'inscrire</button>
      </div>
    </div>
  )
}

export default Register;