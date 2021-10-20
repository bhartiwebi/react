
import { useState} from "react";
import './Condition.css'
function Condition() {
    const [loggedIn, setloggedIn] = useState(true)
    
   
        return (
            <div className="primary" style={{backgroundColor: "deepskyblue"}}>
                <h1>If/else</h1>
                {loggedIn?<h3>Condition bharti</h3>:<h2>Condition react</h2>}
            </div>
        )
    

}
export default Condition;


