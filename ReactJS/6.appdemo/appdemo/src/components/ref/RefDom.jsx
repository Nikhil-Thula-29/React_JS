import { useRef } from "react";

function RefDom(){
    let h2Ref=useRef(null); //{current:null}
    let buttonRef=useRef(null);

    const changeContentStyle=()=>{
        h2Ref.current.innerText="Yes,DOM got Manipulated using useRef concept"
        h2Ref.current.style.color="blue";
        buttonRef.current.style.color="green";  //Every where current is common.
        buttonRef.current.style.padding="10px";  //Every where current is common.
    }

    return (
        <div style={{padding:"50px"}}>
            <h2 ref={h2Ref}>DOM Manipulation using useRef() hook</h2>
            <button ref={buttonRef} onClick={changeContentStyle}>Change Content and Style</button>
        </div>
    );
}
export default RefDom;