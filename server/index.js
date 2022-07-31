const {ApolloServer} = require("apollo-server")
const express = require("express")
const resolvers = require("./resolvers/index.js")
const typeDefs = require("./types/index.js")
const path = require("path")

const mongoose = require('mongoose');
const db = mongoose.connection;
// const pathUri = '/api'
const PORT = process.env.PORT || 4000;
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    introspection: true
})


mongoose.connect('mongodb+srv://zakali22:wODiopDpllY6Ncrd@cluster0.z9crl.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("✅ Database connected ✅" )

    // server.applyMiddleware({app, path})

    // app.listen(PORT, () => console.log(`Listening on port http://localhost:${PORT}/api`))
    app.use("/images", express.static(path.join(__dirname, "../images")))
    server.listen({ port: PORT }).then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    });

});

