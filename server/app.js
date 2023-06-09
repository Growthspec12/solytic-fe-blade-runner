import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import jwt from "jsonwebtoken";

const typeDefs = `
  type User {
    id: ID
    username: String
    password: String
  }

  type AccessToken {
    token: String
    tokenType: String
  }
 
  type AuthPayload {
    user: User
    accessToken: AccessToken
  }

  type Query {
    users: [User]
  }

  type Mutation {
    loginUser (username: String, password: String): AuthPayload
    checkToken(token: String): User
  }
`;

const users = [
  {
    id: 123,
    username: "test@test.com",
    password: "12345678"
  },
  {
    id: 251,
    username: "test2@test.com",
    password: "12345678"
  }
];

const resolvers = {
  Query: {
    users: () => users.toJSON()
  },
  Mutation: {
    loginUser (_, { username, password }) {
      const user = users.find(user => user.username === username);
      if (!user) {
        throw new Error("Invalid login or password");
      }

      const isPasswordValid = user.password === password;
      if (!isPasswordValid) {
        throw new Error("Invalid login or password");
      }

      const token = jwt.sign({ userId: user.id }, "Secret_key");

      const returnValue = {
        accessToken: {
          token,
          tokenType: "Bearer"
        },
        user: {
          id: user.id,
          username: user.username
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

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
});

console.log(`🚀  Server ready at: ${url}`);
