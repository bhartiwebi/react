import './App.css'

function Propfunc(props) {
    console.warn(props)
    return (
        <div className="App" style={{ backgroundColor: "pink" }}>
            <h2>Prop Function</h2>
            <p>Hello : {props.name}</p>
            <p>email : {props.email}</p>
            {/* <h3>address : {props.other.address}</h3> */}

        </div>
    )
}
export default Propfunc;