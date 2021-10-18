
import React from 'react';
function Hideshow() {
    const [status, setStatus] = React.useState(true)
    return (

        <div style={{margin:10}}>

            {
                status ? <h3>Jay mata dii</h3> : null
            }

            {/* <button onClick={() => setStatus(false)}>hide</button>
            <button onClick={() => setStatus(true)}>show</button> */}

<button onClick={()=>setStatus(!status)}>toggle</button>

        </div>
    )
}
export default Hideshow;