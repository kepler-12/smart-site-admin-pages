fetch = require('node-fetch');
const ApolloClient = require('apollo-client-preset').ApolloClient;
const HttpLink = require('apollo-link-http').HttpLink;
const InMemoryCache = require('apollo-cache-inmemory').InMemoryCache;


const gql = require('graphql-tag')
const attachToResource = require('./src/attachToResource')
const templates = require('./src/templates')

module.exports = {
  seeder: require('./src/seeder'),
  attachToResource,
  templates
}

client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:8080/graphql' }),
  cache: new InMemoryCache()
});
