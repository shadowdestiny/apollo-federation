const { gql } = require("apollo-server-express")

const typeDefs = gql `
    #scalar DateTime
    
    extend type Query {
        posts: [Post]
    }
    
    type Post @key(fields: "user_id"){
        id: ID!
        title: String
        content: String
        #user_post: User
        user_id: Int
    }
    
    extend type User @key(fields: "id"){
        id: ID! @external
        email: String
        name: String
        posts: [Post]
    }
    
    # Queries
    #type Query {
    #    getAllPost: [Post]
    #}
    
    # Mutations
    
`;

module.exports = { typeDefs }
