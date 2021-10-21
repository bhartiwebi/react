import React from "react";

function Chil (props)
{
    console.log(props)
    return(
        <div>
            <h2>Parent to child : {props.name}</h2>
        </div>
    )
}
export default Chil;