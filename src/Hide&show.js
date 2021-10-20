
import React from 'react';
import './App.css'
function Hideshow() {
    const [status, setStatus] = React.useState(true)
    return (

        <div className="App" style={{ backgroundColor: "aqua" }}>

            {
                status ? <h3>Hide & Show</h3> : null
            }

            {/* <button onClick={() => setStatus(false)}>hide</button>
            <button onClick={() => setStatus(true)}>show</button> */}

            <button onClick={() => setStatus(!status)}>toggle</button>

        </div>
    )
}
export default Hideshow;