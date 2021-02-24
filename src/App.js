import React from 'react';
import {
  HashRouter as Router,
  Route,

  Switch
} from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import ManageOwners from './components/ManageOwners/ManageOwners.jsx';



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
