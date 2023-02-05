const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        name: String
        email: String
        terms: Boolean
        role: String
    }

    type Client {
        _id: ID
        userId: ID
        paymentMethod: String
        prepaidHours: Int
        projects: [Project]!
    }

    type Project {
        _id: ID
        name: String
        description: String
        createdAt: String
        stage: Int
        totalHours: Int
        links: [String]!
        allocations: [Allocation]!
        developers: [String]!
    }

    type Allocation {
        _id: ID
        date: String
        requestedHours: Int
        actualHours: Int
        employee: ID
        job: String
        zoomLink: String
        status: String
        progressReport: String
    }

    type Employee {
        _id: ID
        userId: ID
        bankDetails: String
        availability: [Availability]!
        schedule: [Allocation]!
        paychecks: [Paycheck]!
        skills: String
        team: String
    }

    type Availability {
        _id: ID
        monday: Int
        tuesday: Int
        wednesday: Int
        thursday: Int
        friday: Int
        saturday: Int
        sunday: Int
    }

    type Paycheck {
        _id: ID
        date: String
        hourlyRate: Int
        hours: Int
    }

    type Auth {
        token: String!
        user: User
      }

    type Query {
        me: User
        client: Client
        employee: Employee
    }
      
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(name: String!, email: String!, password: String!, terms: Boolean!): Auth

      }
`;

module.exports = typeDefs;
