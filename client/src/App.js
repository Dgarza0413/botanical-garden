import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from '@material-ui/core/Container'
import Index from './pages/index';
import Detail from './pages/detail';
import Plants from './pages/plants';
import Navbar from './components/Navbar';
import './style.css'

const App = () => {
  const client = new ApolloClient({
    uri: 'http://localhost:4444/',
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Container disableGutters={true}>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/search" component={Plants} />
            <Route exact path="/search/:id" component={Detail} />
          </Switch>
        </Router>
      </Container>
    </ApolloProvider>
  );
}

export default App;
