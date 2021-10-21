 import { getDefaultNormalizer } from "@testing-library/dom";
import React from "react"
 import './App.css';
function Child1 (props)
{
    const data = {name : 'arya', email : 'arya@gmail.com', address: 'burhanpur'}
    return(
        <div>
            
            <h2>Child to parent data</h2>
            <button onClick={()=>props.alert(data)}>click me</button>
        </div>
    )
}
export default Child1;