import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Nav";
import Landing from "./Components/Landing page/Landing";
import Info from "./Components/Info/Info";
import Signup from "./Components/Signup page/Signup";
import Signin from "./Components/Signin page/Signin";
import Profile from "./Components/Profile page/Profile";
import Nav2 from "./Components/Nav2/Nav2";
import Startup from "./Components/Startup_profile page/Startup";
import Investor from "./Components/Investor_profile page/Investor";
import Plans from "./Components/Plans page/Plans";
import Login from './Components/Login';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/plans">
          <Nav2 />
          <Plans />
        </Route>
          <Route path="/investor">
            <Nav2 />
            <Investor />
          </Route>
          <Route path="/startup">
            <Nav2 />
            <Startup />
          </Route>
          <Route path="/signin">
            <Nav2 />
            <Signin />
          </Route>
          <Route path="/signup">
            <Nav2 />
            <Signup />
          </Route>
          <Route path="/profile">
            <Navbar />
            <Profile />
          </Route>
          <Route path="/info">
            <Navbar/>
            <Info />
        </Route>
          <Route path="/login">
            <Login />
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
