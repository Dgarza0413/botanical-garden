require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4444;

const { ApolloServer } = require('apollo-server-express');
const filePath = path.join(__dirname, 'typeDefs.gql');
const typeDefs = fs.readFileSync(filePath, 'utf-8')
const resolvers = require('./resolvers');
// const routes = require('./routes');

const PlantAPI = require('./datasources/plant');

const server = new ApolloServer({
  context: () => {
    return {
      token: 'SzdHMkwvZDdZVTZUMGpYckFlOVNFUT09'
    }
  },
  resolvers,
  typeDefs,
  dataSources: () => {
    return {
      plantAPI: new PlantAPI()
    }
  }
});


app.use(cors());
server.applyMiddleware({ app, path: '/', cors: false });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors({
//   credentials: true,
//   origin: 'http://localhost:3000'
// }));
// app.use(routes);


app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${server.graphqlPath}!`);
});


