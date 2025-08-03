
import {useState} from 'react'
import B from './B';

const aStyles={
    width:"800px",
    boxShadow:"0 0 10px green",
    textAlign:"center",
    margin:"70px auto",
    padding:"50px",
   
}

function Aassign(){
    let[state,setState]=useState("..........");
    return(
        <div style={aStyles}>
            <h1>A</h1>
            <p>Data: {state}</p>
            <button onClick={()=>{
                setState("Nikhil Full Stack Developer");
            }}>To Transfer Data From A to E</button>
            <B info={state}/>  
        </div>
    );
}
export default Aassign;