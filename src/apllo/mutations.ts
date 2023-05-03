import gql from "graphql-tag";

export const CHECK_TOKEN = gql`
  mutation Mutation($token: String) {
    checkToken(token: $token) {
      id
      username
    }
  }
`

export const LOGIN = gql`
  mutation Mutation($username: String, $password: String) {
    login(username: $username, password: $password) {
      user {
        id
      }
      accessToken {
        token
      }
    }
  }
`