import React from 'react';
import './App.css';
import PrivateRoute from "./components/PrivateRoute";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
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