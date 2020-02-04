// React
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// Components
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import StrainSearch from "./components/StrainSearch";
import SavedStrains from "./components/SavedStrains";
// Styling
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/home">
          <Home />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/strain-search">
          <StrainSearch />
        </Route>
        <Route path="/saved-strains">
          <SavedStrains />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
