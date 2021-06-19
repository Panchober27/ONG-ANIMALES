import React from "react";
import NavBar from "./components/navbar";
import Landing from "./pages/landing";
import Animals from "./pages/animals";
import Donations from "./pages/donations";
import Login from './pages/login';
import Register from './pages/register';
import About from './pages/about';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        {/* Distintas vistas, Madres! */}
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/animals">
            <Animals />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/donations">
            <Donations />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
