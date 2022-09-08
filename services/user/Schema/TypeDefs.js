const { gql } = require("apollo-server-express")

const typeDefs = gql `
    scalar DateTime
    
    extend type Query {
        me: [User]
    }
    
    type User @key(fields: "id"){
        id: ID!,
        email: String!
        name: String
        username: String
        createAt: DateTime!
    }
    
    extend type Post @key(fields: "user_id"){
        id: ID! 
        title: String
        content: String
        user: User @provides(fields: "id")
        user_id: Int @external
    }
    
    # Queries
    type Query {
        getAllUsers: [User]
        totalPosts: Int!
    }
    
    # Mutations
    
`;

module.exports = { typeDefs }
