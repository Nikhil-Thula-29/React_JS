
import B from './B'
import {useState} from 'react'

const aStyles={
    width:"500px",
    boxShadow:"0 0 10px green",
    textAlign:"center",
    margin:"100px auto",
    padding:"50px",
   
}

function A(){
    let[state,setState]=useState("....");
    return (
        <div style={aStyles}>
            <h2>A-Parent</h2>
            <br/>
            <button onClick={()=>{
                setState("Nikhil Thula");
            }}>Pass Data to B and B to C</button>
            <B info={state}/>
        </div>
    );
}
export default A;