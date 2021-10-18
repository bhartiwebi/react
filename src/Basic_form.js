import { useState } from 'react'

function Basic_form() {


    const [name, setName] = useState("");
    const [tnc, setTnc] = useState(false);
    const [interest, setInterest] = useState("");
    function getFormData(e) {
        console.warn(name, tnc, interest)
        e.preventDefault()
    }
    return (
        <div>
            <h2>Om namah shivay</h2>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="enter name" onChange={(e) => setName(e.target.value)} /><br /><br />
                <select onChange={(e) => setInterest(e.target.value)}>
                    <option>vivah</option>
                    <option>ham sath sath he</option>
                    <option>ek vivah aisa bhi</option>
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