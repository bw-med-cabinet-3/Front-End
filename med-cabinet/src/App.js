import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/home">
          <Home />
        </PrivateRoute>
        <Route path="/container">
          <Container />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
