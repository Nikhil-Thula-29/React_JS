
import './Ref.css'
import { useState } from 'react';
function Ref(){
    let[state,setState]=useState(null);
    let[data,setData]=useState(null);
    let value; //undefined
    
    let updateState=()=>{
        setState(100);
    }

    let updateData=()=>{
        setData(1000);
    }

    let updateValue=()=>{
        value="Value got updated";
    }

    let displayValue=()=>{
        console.log("State",state);
        console.log("Data",data);
        console.log(value);
    }

    return(
        <div className='refContainer'> 
            <h2>Ref Component: {state}</h2>
            <button onClick={updateState}>Update State</button>
            <button onClick={updateData}>Update Data</button>
            <button onClick={updateValue}>Update Value</button>
            <button onClick={displayValue}>Display</button>
        </div>
    );
}
export default Ref;