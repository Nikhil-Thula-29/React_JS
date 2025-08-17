import Image from "./Image";
import Text from "./Text";
import { useState } from "react";
import Users from "./Users";

function UseEffect(){
    const[showImage,setShowImage]=useState(true);
    return (
        <div>
            {
                showImage?<Image/>:<Text/>
            }
            <br></br>
            <br></br>
            <button onClick={()=>{
                setShowImage(true);
            }}>Show Image</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={()=>{
                setShowImage(false);
            }}>Show Text</button>
            <hr></hr>
            <Users/>
        </div>
    );
}
export default UseEffect;