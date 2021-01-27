const {gql} = require("apollo-server")

const resolvers = {
    Query: {

    },

    Mutation: {

    },

    // Type resolvers
    Date: {

    },

    Post: {
        createdAt: () => {

        },
        createdBy: () => {

        }
    }
}

module.exports = resolvers