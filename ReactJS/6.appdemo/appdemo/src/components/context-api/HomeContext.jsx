
import Details from "./Details";
import homeContext from "./MyHomeContext";
import { useState } from "react";
import Navbar from "../navbar/Navbar";

function HomeContext(){
    let [state,setState]=useState("");
    let [data,setData]=useState();
    //console.log(state);
    let submitData=()=>{
        setData(state);
    }
    return (
        <div>
            <h2>HomeContext</h2>
            <input type="text" palceholder="Enter Text" onChange={(event)=>{
                setState(event.target.value);
            }}/>
            <button onClick={submitData}>Submit</button>
            <hr>
            </hr>
            <homeContext.Provider value={data}>
            <Details/>
            <Navbar/>
            </homeContext.Provider>   
        </div>
    );
}
export default HomeContext;