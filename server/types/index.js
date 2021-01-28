const {gql} = require("apollo-server")

const typeDefs = gql`
    scalar Date

    type User {
        id: ID
        name: String
        image: String
    }

    type Post {
        id: ID
        title: String!
        body: String!
        createdAt: Date
        createdBy: User
    }

    # Inputs
    input UserInput {
        id: ID
        name: String
    }

    input PostInput {
        title: String!
        body: String!
        createdBy: UserInput
    }

    # Queries + Mutations
    type Query {
        post(id: ID!): Post
        posts: [Post]
        users: [User]
    }

    type Mutation {
        addPost(post: PostInput): [Post]
        deletePost(id: ID!): [Post]
        addUser(user: UserInput): [User]
    }
`

module.exports = typeDefs