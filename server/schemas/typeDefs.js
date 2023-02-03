const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        name: String
        email: String
        terms: Boolean
        role: String
    }

    type Auth {
        token: String!
        user: User
      }

    type Query {
        me: User
    }
      
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(name: String!, email: String!, password: String!, terms: Boolean!): Auth
      }
`;

module.exports = typeDefs;
