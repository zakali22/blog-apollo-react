const {gql} = require("apollo-server")

const typeDefs = gql`
    scalar Date

    type User {
        name: String!
        image: String
    }

    type Post {
        title: String!
        body: String!
        createdAt: Date
        createdBy: User
    }

    input PostInput {
        title: String!
        body: String!
    }

    # Queries + Mutations
    type Query {
        post(id: ID!): Post
        posts: [Post]
    }

    type Mutation {
        addPost(post: PostInput): [Post]
        deletePost(id: ID!): [Post]
    }
`

module.exports = typeDefs