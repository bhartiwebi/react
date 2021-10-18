import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import New from './New';
import Newcls from './Newcls';
import Clickevntfun from './Clickevntfun';
import reportWebVitals from './reportWebVitals';
import Updatevnt from './Updatevnt';
import Propfunc from './Propfunc';

ReactDOM.render(
  <React.StrictMode>

    <Clickevntfun />
    <Updatevnt />
    <Propfunc name={"bharti"} />
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
