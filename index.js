const { prisma } = require("./generated/prisma-client");
const { GraphQLServer } = require("graphql-yoga");
const resolvers = require("./src/resolvers/resolvers");
const permissions = require("./src/security/authentication");

const options = {
  port: 4000,
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground"
};

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers,
  middlewares: [permissions],
  context: request => {
    return {
      ...request,
      prisma
    };
  }
});

server.start(options, () =>
  console.log("Server is running on http://localhost:4000/playground")
);
