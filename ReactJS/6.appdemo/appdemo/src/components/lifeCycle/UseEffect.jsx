import Image from "./Image";
import Text from "./Text";
import { useState } from "react";

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
        </div>
    );
}
export default UseEffect;