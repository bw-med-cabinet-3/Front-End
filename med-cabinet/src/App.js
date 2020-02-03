import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, PrivateRoute} from "react-router-dom";
import Home from "./components/Home";
import StrainSearch from "./components/StrainSearch";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/home">
          <Home />
        </PrivateRoute>
        <Route path="/strain-search">
          <StrainSearch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
