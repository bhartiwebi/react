import './App.css'

function Clickevntfun() {
    // let data = "bharti rathod"
    function apple() {
        // data = "sanchi";
        //         alert(data)
        alert("hello react")

    }
    return (
        <div className="Clickevnfun, App" style={{ backgroundColor: "beige" }}>
            {/* <h2>{data}</h2> */}
            <h3>Click Event</h3>
            <button onClick={() => apple()}>click me</button>
        </div>
    );
}
export default Clickevntfun;

// function Clickevntfun() {
//     const shoot = () => {
//       alert("Great Shot!");
//     }

//     return (
//       <button onClick={shoot}>Take the shot!</button>
//     );
//   }
// export default Clickevntfun;

