import D from "./D";
import myfirstContext from "./context";
import { useContext } from "react";

const cStyles={
    width:"500px",
    boxShadow:"0 0 10px Orange",
    textAlign:"center",
    margin:"35px auto",
    padding:"50px",
   
}
function C(){
    let contextData=useContext(myfirstContext);
    return (
        <div style={cStyles}>
            <h2>C</h2>
            <p>Data: {contextData}</p>
            <D/>
        </div>
    );
}
export default C;