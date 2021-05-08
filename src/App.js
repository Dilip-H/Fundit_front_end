import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Nav";
import Landing from "./Components/Landing page/Landing";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile page/Profile";
import Nav2 from "./Components/Navbar_two/Nav2";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Nav2 />
            <Profile />
          </Route>
          <Route path="/">
            <Navbar />
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
