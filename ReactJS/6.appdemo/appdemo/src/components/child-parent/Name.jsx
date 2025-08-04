
import Display from "./Display";
import { useState } from "react";
function Name(){
    let [state,setState]=useState();
    return (
        <div>
            <h2>Name-Parent</h2>
            <br>
            </br>
            <p>Child Data: {state}</p>
            <hr>
            </hr>
            <Display setData={setState}/>
        </div>
    );
}
export default Name;