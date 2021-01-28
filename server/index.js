const {ApolloServer} = require("apollo-server")
const resolvers = require("./resolvers/index.js")
const typeDefs = require("./types/index.js")

const mongoose = require('mongoose');
const db = mongoose.connection;
const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    introspection: true
})


mongoose.connect('mongodb+srv://zakali22:wJ2cQEa5ptGBJDjG@cluster0.z9crl.mongodb.net/blog-apollo-db?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("✅ Database connected ✅" )

    server.listen({port: PORT}).then(({url}) => console.log(`Listening on port http://localhost:${PORT}`))

});

