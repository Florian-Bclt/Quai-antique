import { gql } from '@apollo/client';

// LOGIN
export const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    authLogin(username: $username, password: $password) {
      accessToken
      role
    }
  }
`;

// USER
export const USER_CREATE = gql `
mutation userCreate(
  $email: String, 
  $password: String, 
  $firstName: String, 
  $lastName: String, 
  $allergy: String = null, 
  $role: UserRole!
  ) {
  userCreate(
    input: {
    email: $email,
    password: $password,
    firstName: $firstName,
    lastName: $lastName,
    allergy: $allergy,
    role: $role
  }) {
    user {
      id
      createdAt
      email
      firstName
      lastName
      allergy
      role
    }
  }
}
`


