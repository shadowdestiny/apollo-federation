const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const http = require("http");
const { buildFederatedSchema, buildSubgraphSchema} = require("@apollo/federation");

const {typeDefs} = require("./Schema/TypeDefs");
const {resolvers} = require("./Schema/Resolvers");

const app = express();

let apolloServer = null;

async function startServer() {
    apolloServer = new ApolloServer({
        schema: buildSubgraphSchema([
            {
                typeDefs,
                resolvers
            }
        ])
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}

startServer();

const httpserver = http.createServer(app);

app.get("/rest", function (req, res) {
    res.json({ data: "api working" });
});

app.listen(4001, function () {
    console.log(`server running on port 4001`);
    console.log(`gql path is ${apolloServer.graphqlPath}`);
});
