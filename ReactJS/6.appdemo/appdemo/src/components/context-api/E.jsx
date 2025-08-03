import { useContext } from "react";
import myfirstContext from "./context";
const eStyles={
    width:"300px",
    boxShadow:"0 0 10px blue",
    textAlign:"center",
    margin:"20px auto",
    padding:"30px",
   
}

function E(){
    let contextData=useContext(myfirstContext);
    return (
        <div style={eStyles}>
            <h2>E</h2>
            <p>Data: {contextData}</p>
        </div>
    );
}
export default E;