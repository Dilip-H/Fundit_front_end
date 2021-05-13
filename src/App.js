import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Nav";
import Landing from "./Components/Landing page/Landing";
import Signup from "./Components/Signup page/Signup";
import Signin from "./Components/Signin page/Signin";
import Profile from "./Components/Profile page/Profile";
import Nav2 from "./Components/Nav2/Nav2";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
       <Route path="/signin">
           <Nav2 />
           <Signin />
          </Route>
       <Route path="/signup">
           <Nav2 />
           <Signup />
          </Route>
        <Route path="/profile">
          <Navbar/>
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
