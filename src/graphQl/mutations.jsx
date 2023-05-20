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

// ENUM ROLE
export const UserRole = {
  CLIENT: 'CLIENT',
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER'
}

// USER
export const USER_CREATE = gql`
  mutation userCreate(
    $email: String!, 
    $password: String!, 
    $firstName: String!, 
    $lastName: String!, 
    $allergy: String, 
    $role: UserRole!
  ) {
  userCreate(input: {
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
`;

export const USER_DELETE = gql`
  mutation UserDelete($id: String!) {
    userDelete(id: $id)
  }
`;

// RESERVATION
export const RESERVATION_CREATE = gql`
mutation reservationCreate($userId: String!, $reservation: ReservationCreateInput!) {
  createReservation(userId: $userId, reservation: $reservation) {
    id
    user {
      id
      firstName
      lastName
      allergy
    }
    table {
      id
      title
      places
    }
    date
    reservationHour
    places
  }
}
`;
