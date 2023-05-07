import { gql } from '@apollo/client'

// PRODUCTS
export const GET_PRODUCTS = gql `
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
export const GET_ALL_MENUS = gql `
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

export const GET_CLIENT = gql `
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

export const  GET_TEAM = gql `
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

// TABLES

  export const GET_TABLES = gql `
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