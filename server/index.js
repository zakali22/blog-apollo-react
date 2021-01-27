const {ApolloServer} = require("apollo-server")
const resolvers = require("./resolvers")
const typeDefs = require("./types")

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    introspection: true
})