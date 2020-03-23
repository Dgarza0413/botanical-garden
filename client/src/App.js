import React from 'react';
import Container from '@material-ui/core/Container'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from './pages/index';
import Detail from './pages/detail';
import Plants from './pages/plants';
import Navbar from './components/Navbar';
import './style.css'

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Router>
          <Switch>
            <Route exact path="/detail" component={Detail} />
            <Route exact path="/search" component={Plants} />
            <Route exact path="/" component={Index} />
          </Switch>
        </Router>
      </Container>
    </>
  );
}

export default App;
