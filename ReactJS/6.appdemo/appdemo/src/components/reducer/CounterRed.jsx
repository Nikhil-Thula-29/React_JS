import { useReducer } from 'react';
import './CounterRed.css'
import counterReducer from './counterReducer';

function CounterRed(){

    let[state,dispatch]=useReducer(counterReducer,{count:0});

    const incCount=()=>{
        dispatch({
            type:"INC"
        });
    }

    const decCount=()=>{
        dispatch({
            type:"DEC"
        });
    }

    const clearCount=()=>{
        dispatch({
            type:"CLEAR"
        });
    }

    return(
        <div className="reducerCounter">
            <h2>Counter App with useReducer() Hook: {state.count}</h2>
            <button onClick={incCount}>inCount</button>
            <button onClick={decCount}>deCount</button>
            <button onClick={clearCount}>Clear</button>
        </div>
    );
}
export default CounterRed;