import React from 'react';
import Home from './pages/Home/Home.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
