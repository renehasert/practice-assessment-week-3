import React from 'react';
import { Switch, Route, NavLink } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage'
import Schedule from './pages/Schedule'
import Signup from './pages/Signup'
import Database from './pages/Database'

function App() {
  return (
    <div className="App">
      <nav className="nav">
          <NavLink to="/" exact activeStyle={{fontWeight:'bold'}}>Home</NavLink>|
          <NavLink to="/schedule" exact activeStyle={{fontWeight:'bold'}}>Doctor Schedule</NavLink>|
          <NavLink to="/signup" exact activeStyle={{fontWeight:'bold'}}>Patient Signup</NavLink>|
          <NavLink to="/database" exact activeStyle={{fontWeight:'bold'}}>Patient Database</NavLink>|
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/signup" component={Signup} />
        <Route path="/database" component={Database} />
      </Switch>
    </div>
  );
}

export default App;
