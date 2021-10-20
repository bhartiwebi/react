import logo from './logo.svg';
import './App.css';
import About from './About';
import Contact from './Contact';
import React from 'react';
import { Route, Switch, Redirect, Link, Router } from 'react-router-dom'

function App() {

  return (

    <Route>


      <div>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/About">About Page</Link>
        </li>


        <Switch>
          <Route path="/About" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>

      </div>
    </Route>

  );
}

export default App;
