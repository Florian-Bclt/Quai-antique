import { gql } from '@apollo/client';

// LOGIN
export const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    authLogin(username: $username, password: $password) {
      accessToken
      role
      user {
        id
        email
        firstName
        lastName
        allergy
        role
      }
    }
  }
`;

// ENUM ROLE
export const UserRole = {
  CLIENT: 'CLIENT',
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER'
}


///////////// CREATE

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

// TABLE 

export const TABLE_CREATE = gql`
  mutation tableCreate(
    $title: String!,
    $places: Int! =0,
    $available: Boolean!,
  ) {
    tableCreate(input: {
      title: $title,
      places: $places,
      available: $available,
    }) {
      table {
        id
        createdAt
        title
        places
        available
      }
    }
  }
`;

// PRODUCTS

export const PRODUCTS_CREATE = gql`
  mutation productsCreate(
    $title: String!,
    $price: Float!,
    $tags: String!
    $category: String!
  ) {
    productsCreate(input: {
      title: $title,
      price: $price,
      tags: $tags,
      category: $category
    }) {products {
      id
      createdAt
      title
      price
      tags
      category
      }
    }
  }
`

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


///////////// UPDATE

// Table
export const TABLE_UPDATE = gql`
  mutation updateTable(
    $title: String!,
    $places: Int! = 0,
    $available: Boolean!,
  ) {
    tableUpdate(
    tableId: id,
    input: {
      title: $title,
      places: $places,
      available: $available,
    }) {
    table{
      id
      createdAt
      title
      places
      available
      }
    }
  }
`;

// HOUR
export const HOUR_UPDATE = gql`
  mutation updateOpeningHours(
    $id: ID!,
    $dayOfWeek: Int!,
    $isClosed: Boolean!,
    $lunchOpeningTime: String,
    $lunchClosingTime: String,
    $dinnerOpeningTime: String,
    $dinnerClosingTime: String
  ) {
    updateOpeningHours(
      id: $id,
      input: {
        dayOfWeek: $dayOfWeek,
        isClosed: $isClosed,
        lunchOpeningTime: $lunchOpeningTime,
        lunchClosingTime: $lunchClosingTime,
        dinnerOpeningTime: $dinnerOpeningTime,
        dinnerClosingTime: $dinnerClosingTime
      }
    ) {openingHours {
        id
        updatedAt
        dayOfWeek
        isClosed
        lunchOpeningTime
        lunchClosingTime
        dinnerOpeningTime
        dinnerClosingTime
      }
    }
  }
`

///////////// DELETE


// USER
export const USER_DELETE = gql`
  mutation UserDelete($id: String!) {
    userDelete(id: $id)
  }
`;

// HOURS

export const HOUR_DELETE = gql`
  mutation deleteOpeningHours($id: String!) {
    DeleteOpeningHours(id: $id)
  }
`;

// TABLES

export const TABLE_DELETE = gql`
  mutation deleteTable($id: ID!) {
    tableDelete(tableId: $id){tableId}
  }
`

// PRODUCTS 

export const PRODUCTS_DELETE = gql`
  mutation productsDelete($id: String!) {
    productsDelete(productsId: $id) {productsId}
  }
`