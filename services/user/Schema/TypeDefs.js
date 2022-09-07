const { gql } = require("apollo-server-express")

const typeDefs = gql `
    #scalar DateTime
    
    type User {
        id: ID!,
        email: String!
        name: String
       # createAt: DateTime!
    }
    
    # Queries
    type Query {
        getAllUsers: [User]
        totalPosts: Int!
    }
    
    # Mutations
    
`;

module.exports = { typeDefs }
