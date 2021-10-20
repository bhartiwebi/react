import React from 'react';
import './App.css'
class Lifecycle extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "bharti"
        }
        console.warn("constructor");
    }
    componentDidMount() {
        console.warn("componentDidMount");
    }


    render() {
        console.warn("render");
        return (
            <div className="App" style={{ backgroundColor: "#e3f98d" }}>
                <h3>Lifecycle {this.state.name}</h3>
                <button onClick={() => { this.setState({ name: "arya" }) }}>Update name</button>
            </div>
        )
    }
}

export default Lifecycle;
