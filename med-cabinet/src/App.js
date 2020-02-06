// React
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// Components
import PrivateRoute from "./components/PrivateRoute";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import StrainSearch from "./components/StrainSearch";
import StrainDetails from './components/StrainDetails';
import SavedStrains from "./components/SavedStrains";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import ChangeEmail from "./components/ChangeEmail";
// Styling
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/home" component={Home} />
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/strain-search">
          <StrainSearch />
        </Route>
        <Route path="/strain-details">
          <StrainDetails />
        </Route>
        <Route path="/saved-strains">
          <SavedStrains />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/change-email">
          <ChangeEmail />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;