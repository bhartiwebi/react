import { useState,use  } from 'react';
import './Basic_form.css'

function Basic_form() {


    const [name, setName] = useState("");
    const [tnc, setTnc] = useState(false);
    const [interest, setInterest] = useState("");
   
    function getFormData(e) {
        console.warn(name, tnc, interest)
        e.preventDefault()
    }
    return (
        <div className="primary" style={{backgroundColor: "#d7b6d0"}}>
            <h2>Basic Form</h2>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="enter name" onChange={(e) => setName(e.target.value)} /><br /><br />

                <select onChange={(e) => setInterest(e.target.value)}>
                    <option>burhanpur</option>
                    <option>ujjain</option>
                    <option>indore</option>
                </select>
                
                <br /><br />
                <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} /><span>Accept turm & conditions</span>
                <br /><br />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Basic_form;