import { ApolloServer, gql } from "apollo-server";
import jwt from "jsonwebtoken";

const typeDefs = gql`

  type AuthPayload {
    user: User
    accessToken: AccessToken
  }

  type AccessToken {
    token: String
  }

  type User {
    id: ID
    username: String
  }

  type Query {
    users: [User]
  }

  type Mutation {
    login (username: String, password: String): AuthPayload
    checkToken(token: String): User
  }
`;

const users = [
  {
    id: 1,
    username: "test@test.com",
    password: "12345678"
  },
  {
    id: 2,
    username: "test2@test.com",
    password: "12345678"
  }
];

const resolvers = {
  Query: {
    users: () => users.toJSON()
  },
  Mutation: {
    login (_, { username, password }) {
      const user = users.find(user => user.username === username);
      const isPasswordValid = user.password === password;
      if (!user) {
        throw new Error("Invalid login or password");
      }
      if (!isPasswordValid) {
        throw new Error("Invalid login or password");
      }

      const token = jwt.sign({ userId: user.id }, "Secret_key");

      const returnValue = {
        accessToken: {
          token
        },
        user: {
          id: user.id
        }
      };

      return returnValue;
    },
    checkToken (_, { token }) {
      const verified = jwt.verify(token, "Secret_key");
      const { id, username } = users.find(usr => usr.id === verified.userId);
      return { id, username };
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
