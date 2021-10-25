import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import New from './New';
import Newcls from './Newcls';
import Clickevntfun from './Clickevntfun';
import reportWebVitals from './reportWebVitals';
import Updatevnt from './Updatevnt';
import Propfunc from './Propfunc';
import Hideshow from './Hide&show';
import Basic_form from './Basic_form';
import Condition from './Condition';
import Condition3 from './Condition3';
import Child from './Child';
import Lifecycle from './Lifecycle';
import Bootstrap from './Bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Contact from './Contact';
import About from './About';
import Class from './Class';
import Fragment from './Fragment';
import Child1 from './Child1';
import DataFetching from './DataFetching';
import Bharti from './Bharti';
import HomeContainer from './containers/HomeContainer';


function getData() {
  alert("hello...I'm comming from parent component")




}

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <App />

    </BrowserRouter>
    {/* <HomeContainer /> */}
    {/* <Bharti data={{ name: 'arya', age: '24' }} /> */}
    
    {/* <DataFetching /> */}
    {/* <Child name={getData}/> */}
    {/* <Child1 /> */}

    {/* <Basic_form /> */}

    {/* <Newcls />
<Bootstrap />
    <Lifecycle />
    <Hideshow />
    <Clickevntfun />
    <Updatevnt />
    <Basic_form />
    <Condition />
    <Condition3 />
  

    <Propfunc name={"bharti"} email="bharti@webi.com " /> */}
    {/* <Propfunc name={"arya"} email="bharti@webi.com " other={{address:'burhanpur', mobile:"7225038682"}} />
    <Propfunc name={"gayu"} email="bharti@webi.com " other={{address:'burhanpur', mobile:"7225038682"}}  />
    <Propfunc name={"prachi"} email="bharti@webi.com " other={{address:'burhanpur', mobile:"7225038682"}}  /> */}

  </React.StrictMode>,


  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
