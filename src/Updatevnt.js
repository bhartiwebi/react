import {useState} from "react";


function Updatevnt(){

    const [data,setData]=useState(0)
    function updatedata()
    {
        // setData("arya")
        setData(data+1)
    }
    console.log("data")
    // let data = "arya";
    // function update ()
//    {
// data = "rathod";
// alert(data)
//    }
    // console.log("_____");
    return(
        <div>
            {/* <h2>{data}</h2> */}
            <h3>{data}</h3>
            <button onClick={updatedata}>update</button>
        </div>
    );
}
export default Updatevnt;



// import {useState} from "react";


// function Updatevnt(){

//     const [data,setData]=useState("bharti")
//     function updatedata()
//     {
//         // setData("arya")
//         setData("arya")
//     }
//     console.log("data")
//     // let data = "arya";
//     // function update ()
// //    {
// // data = "rathod";
// // alert(data)
// //    }
//     // console.log("_____");
//     return(
//         <div>
//             {/* <h2>{data}</h2> */}
//             <h3>{data}</h3>
//             <button onClick={updatedata}>update</button>
//         </div>
//     );
// }
// export default Updatevnt;