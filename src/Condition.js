
import { useState} from "react";
function Condition() {
    const [loggedIn, setloggedIn] = useState(false)
    
   
        return (
            <div>
                {loggedIn?<h3>welcom bharti</h3>:<h2>welcome react</h2>}
            </div>
        )
    

}
export default Condition;