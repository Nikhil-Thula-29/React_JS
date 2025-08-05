
import './Ref.css'
import { useRef, useState } from 'react';
function Ref(){
    let[state,setState]=useState(null);
   // let[data,setData]=useState(null); //we can not store as we are not rendering this value on UI.
    //let value; //undefined   //noraml variable value becomes undefined on rerendering.
    let info=useRef("hello");  //info={current:"hello"}

    let updateState=()=>{
        setState(100);
    }

    let updateData=()=>{
        setData(1000);
    }

    let updateValue=()=>{
        value="Welcome";
    }

    let displayValue=()=>{
        console.log("State",state);
        console.log("Data",data);
        console.log("variable",info);
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