import { useReducer } from "react";

const reducerFn=(action)=>{
    return "It is modified";
}

function UseReducer(){
    //let[state,dispatch]=useReducer(reducerFn,{city:"Delhi"});
    let[state,dispatch]=useReducer(reducerFn,100);  //reducerFn is userdefined we can create at any where outside fun or any where and 100=initialvalue which stores in state.
    
    let modifyState=()=>{
        dispatch({type:"Dummy"});   //Here type:"Dummy" is not used but we can write that and type is fixed name if we want to add parameter.
    }
    
    return (
        <div style={{padding:"100px"}}>
             <h2>UseReducer() Hook: {state}</h2> 
            {/* <h2>UseReducer() Hook: {state.city}</h2> */}
            <button onClick={modifyState}>update State</button>
        </div>
    );
}

export default UseReducer;