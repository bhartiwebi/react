import React from "react"
import './App.css'
function Child(props){

    return(
        <div className="App" style={{backgroundColor: "lightcoral"}}>
            <h2>Pass function Parant to child component</h2>
            {/* u can call this typ <button onClick={()=>props.data()}>call data function</button>  */}
            <button onClick={props.data}>call data function</button>
        </div>
    )
}
export default Child;