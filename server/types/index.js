const {gql} = require("apollo-server")

const typeDefs = gql`
    scalar Date

    type User {
        _id: ID
        name: String
        image: String
        posts: [Post]
    }

    type Post {
        _id: ID
        title: String!
        body: String!
        createdAt: Date
        createdBy: User
    }

    # Inputs
    input UserInput {
        _id: ID
        name: String
        posts: [PostInput]
    }

    input PostInput {
        _id: ID
        title: String
        body: String
        createdBy: UserInput
    }

    # Queries + Mutations
    type Query {
        post(_id: ID!): Post
        posts: [Post]
        users: [User]
        user(_id: ID!): User
    }

    type Mutation {
        addPost(post: PostInput): [Post]
        deletePost(_id: ID!): [Post]
        addUser(user: UserInput): [User]
    }
`

module.exports = typeDefs