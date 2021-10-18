function Propfunc(props) {
    console.warn(props)
    return (
        <div style={{ backgroundColor: "pink" }}>
            <p>Hello : {props.name}</p>
            {/* <h2>email : {props.email}</h2>
            <h3>address : {props.other.address}</h3> */}

        </div>
    )
}
export default Propfunc;