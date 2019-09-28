import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Plants from './pages/plants';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Plants} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
