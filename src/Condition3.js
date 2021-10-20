import { useState } from "react";
import './App.css'

function Condition3() {

    const [loggedIn, setloggedIn] = useState(3)

    // this is state ---> const [loggedIn, setloggedIn] = useState(3) 
    // normal variable --> loggedIn = 1, 2, 3;

    // 1, 2, 3 
    return (
        <div className="App" style={{ backgroundColor: "burlywood" }}>
            <h1>If/else/else if</h1>
            {loggedIn == 1 ?
                <h2> wellcome user 1</h2>
                : loggedIn == 2 ? <h3>wellcome user 2</h3>
                    : <h4>wellcome user 3</h4>}

        </div>
    )
}
export default Condition3;