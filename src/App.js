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
          <NavLink exact to="/">Home</NavLink>|
          <NavLink to="/schedule">Doctor Schedule</NavLink>|
          <NavLink to="/signup">Patient Signup</NavLink>|
          <NavLink to="/database">Patient Database</NavLink>|
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
