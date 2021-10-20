import React from "react";
import {Button} from 'react-bootstrap';

function Bootstrap(){
    return(
        <div>
            <h2>Hello Bootstrap</h2>
     <Button onClick={()=>alert("hello")}>Click me</Button>
        </div>
    )
}
export default Bootstrap;