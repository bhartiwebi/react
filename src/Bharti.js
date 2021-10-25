import React from "react";

const Bharti = (props) => {
console.log(props)
    return (
        <div>
            <h2>name: {props.data.name}</h2>
            <h3>Age: {props.data.age}</h3>
        </div>
    )
}
export default Bharti;