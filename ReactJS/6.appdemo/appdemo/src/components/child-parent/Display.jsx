
import { useState } from "react";

function Display({setData}){
    let [childData,setchildData]=useState("React JS");
    return (
        <div>
            <h2>Display-child</h2>
            <button onClick={()=>{
                setData(childData);
            }}>Pass Data To Parent</button>
        </div>
    );
}
export default Display;