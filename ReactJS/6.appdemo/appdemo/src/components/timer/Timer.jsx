import { useState,useRef } from "react";

function Timer(){
    let [timer,setTimer]=useState(0);
    //var timerId;  //We cant store in this way due to rendering of setInterval.
    //let [timerId,setTimerId]=useState();  //This timerId is also should not be stored in this way as we not showing that id value on screen so use, useref();
    let timerId=useRef();   //timerId={current:undefined}   
    //timerId.current=new value  (how to update timer value)

    const startTimer=()=>{
        timerId.current=(setInterval(()=>{
            //setTimer(timer+1);    //Dont use this due to multiple function before updating in UI it will render which gives problem so use functional argument.
            setTimer((prevTimer)=>{
                return prevTimer+1;
            })
        },1000));
    }
    
    const stopTimer=()=>{
        clearInterval(timerId.current); //usefull stopping the same timerId.
    }

    const resetTimer=()=>{
        setTimer(0);
    }

    return (
        <div style={{
            width:"500px",
            margin:"100px auto",
            textAlign:"center",
            boxShadow:"0 0 10px blue",
            padding: "15px"
            }}>
        <h2>Timer value is: {timer}</h2>
        <br></br>
        <button style={{ marginRight: "10px" }} onClick={startTimer}>Start</button>
        <button style={{ marginRight: "10px" }} onClick={stopTimer}>Stop</button>
        <button style={{ marginRight: "10px" }} onClick={resetTimer}>Clear</button>
        </div>
    );
}
export default Timer;