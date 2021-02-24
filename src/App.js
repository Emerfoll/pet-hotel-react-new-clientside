import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard.jsx'
import ManageOwners from './components/ManageOwners/ManageOwners.jsx'

import './App.css';


function App() {
  return (


      <Router>

        <div>

          <Switch>
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
