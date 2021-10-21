import logo from './logo.svg';
import './App.css';
import About from './About';
import Contact from './Contact';
import Fragment from './Fragment';
import Child1 from './Child1';
// import React, { Fragment } from 'react';
import { Route, Switch, Redirect, Link, Router } from 'react-router-dom'
import Chil from './Chil';
import Api from './Api';
import DataFetching from './DataFetching';

function App() {
// parent to child => let data = "bharti"
let data ="arya"

function parantalert(data){
  console.log(data)
  alert(data.name);
}

// child to parent => function parantalert(data){
//   console.log(data)
//   alert(data.name);
// }
  return (

    <Route>


      <div>
      {/* parent to child   <Child1 name={data}/> */}
      {/* child to parent => <Child1 alert={parantalert}/> */}
      {/* <Child1 alert={parantalert}/>
      <Chil name={data}/> */}
   


        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/About">About Page</Link>
        </li>
        <li>
          <Link to="/Fragment">Fragment Page</Link>
        </li>
        <li>
          <Link to="/DataFetching">Data Fetching</Link>
        </li>

        <li>
          <Link to="/Api">Api Page</Link>
        </li>
       
        

        <Switch>
          <Route path="/About" component={About}  />
          <Route path="/contact" component={Contact} />
          <Route path="/fragment" component={Fragment} />
      <Route path="/DataFetching" component={DataFetching} />
          <Route path="/Api" component={Api} />
        
        </Switch>

      </div>
    </Route>

  );
}

export default App;
