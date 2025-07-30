import "./Counter.css"
import {useState} from 'react';


function Counter(){
    var [state,setState]=useState(0);   //here 0 is stored in state
    var [count,setCount]=useState(1);   //here 0 is stored in state
    function increaseCount(){
        /* state=state+1;
        console.log(state); */
        setState(state+1); //1-re-render
        //console.log(state);//0
        //setCount(count+9);
        /* setState((prevState)=>{     //0+1=1
            return prevState+1;
        }); //1
        setState((prevState)=>{     //1+1=2
            return prevState+1;
        });
        setState((prevState)=>{     //2+1=3
            return prevState+1;
        }); */
        //setState(state+1); //1
        //setState(state+3);   //+3
        //Last will execute and render what ever it is like setState(state+3)
    }
    return (
        <div className="counter">
            <h2>Counter App Using React</h2>
            <p>Count Value is: {state}</p>
            {/* <p>Count Value is: {count}</p> */}
            <button onClick={increaseCount}>inCount</button>
        </div>
    );
}
export default Counter;