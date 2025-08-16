import { useRef } from "react";
import { useDispatch } from "react-redux";

function NameParent(){

    let inputRef=useRef(null);
    let dispatch=useDispatch();

    const getData=()=>{
        //create a action object
        var actionObj={
            type:"NAME",
            nameComp:inputRef.current.value,
        }
        /* console.log(inputRef.current);
        console.log(actionObj.nameComp); */
        dispatch(actionObj);    //dispatch automatically calls stores(dispatch → store → reducer → state update)
    }

    return(
        <div style={{padding:"30px"}}>
            <h2>Name Component</h2>
            <input ref={inputRef} type='text' placeholder="Add some data"/>
            <button onClick={getData}>Submit</button>
        </div>
    );
}
export default NameParent;