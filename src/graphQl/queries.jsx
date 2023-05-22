import { gql } from '@apollo/client'

// PRODUCTS

export const GET_PRODUCTS = gql`
  query productsList {
    productsPagination(skip: 0, take: 30) {
      totalCount
      nodes {
        id
        title
        category
        price
        tags
      }
    }
  }
`;

export function getProducts(client) {
  return client.query({
    query: GET_PRODUCTS
  });
}

// MENUS

export const GET_ALL_MENUS = gql`
  query {
    getAllMenus {
      id
      title
      price
      entries {
        title
        description
      }
      mainCourses {
        title
        description
      }
      desserts {
        title
        description
      }
    }
  }
`

export function getAllMenus(client) {
  return client.query({
    query: GET_ALL_MENUS
  });
}

// USERS

export const GET_CLIENT = gql`
  query client {
    userGetByRole(role: "client") {
      id
      email
      firstName
      lastName
      allergy
      role
    }
  }
`
export function getClientUsers(client) {
  return client.query({
    query: GET_CLIENT
  });
}

export const  GET_TEAM = gql`
  query getUsersByRoles {
    userGetByRoles(roles: ["admin", "manager"]) {
      id
      email
      firstName
      lastName
      role
    }
  }
`

export function getTeamUsers(client) {
  return client.query({
    query: GET_TEAM
  });
}

export const GET_USER_BY_ID = gql`
  query getUserById($id: String!, $role: String) {
    getUserById(id: $id, role: $role) {
      id
      email
      firstName
      lastName
      allergy
    }
  }
`
export function getUserById(client) {
  return client.query({
    query: GET_USER_BY_ID
  });
}

// TABLES

  export const GET_TABLES = gql`
  query getTables {
    tablesPagination(skip: 0, take: 10, sortBy: ASC) {
      totalCount
      nodes {
        id
        title
        places
        available
      }
    }
  }
  `
  export function getTables(client, skip, take, sortBy) {
    return client.query({
      query: GET_TABLES,
      variables: { skip, take, sortBy }
    });
  }

  // RESERVATIONS 

 export const GET_RESERVATIONS_BY_DAY = gql`
  query GetReservationsByDay($day: String!) {
    getReservationsByDay(day: $day) {
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
      reservationEndHour
      places
    }
  }
`;

export function getReservations(client, user, table, date, reservationHour, reservationEndHour, places) {
  return client.query({
    query: GET_RESERVATIONS_BY_DAY,
    variables: { user, table, day: date.toISOString().substr(0, 10), reservationEndHour, reservationHour, places}
  })
}

// HORAIRE

export const GET_HOURS = gql`
query openingHoursList {
  openingHours {
    id
    createdAt
    dayOfWeek
    isClosed
    lunchOpeningTime
    lunchClosingTime
    dinnerOpeningTime
    dinnerClosingTime
  }
}
`

export function getHours(client) {
  return client.query({
    query: GET_HOURS
  });
}