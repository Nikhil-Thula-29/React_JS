import "./Counter.css"
import {useState} from 'react';


function Counter(){
    var [state,setState]=useState(0);   //here 0 is stored in state
    function increaseCount(){
        setState(state+1);
    }
    return (
        <div className="counter">
            <h2>Counter App Using React</h2>
            <p>Count Value is: {state}</p>
            <button onClick={increaseCount}>inCount</button>
        </div>
    );
}
export default Counter;