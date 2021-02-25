import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import ManageOwners from './components/ManageOwners/ManageOwners.jsx';
import Nav from './components/Nav/Nav.jsx'


function App() {
  return (


    <Router>
      <Nav />

      <div>

        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route
            // shows Dashboard
            exact
            path="/home"
          >
            <Dashboard />
          </Route>

          <Route
            // shows Dashboard
            exact
            path="/owners"
          >
            <ManageOwners />
          </Route>

        </Switch>
      </div>

    </Router>


  );
}

export default App;
