
import { useEffect, useState } from "react";

function Image(){

    const[image,setImage]=useState("data:image/png;base64,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");
    const[title,setTitle]=useState("ReactJS");
    /* useEffect(()=>{
        console.log("UseEffect callback is called");
        return ()=>{
            console.log("Returned Function");   //This will be called just before the component unmoutned.
        }
    },[]); */

    /* document.title="Image Component" */; //side Effects //invalid

    useEffect(()=>{
        console.log("UseEffect callback is called");
        document.title=`${title} Image Component`;
        localStorage.setItem('name',"Nikhil Thula");
        return ()=>{
            localStorage.removeItem('name');    //This is called before umounted.
        }
    });

    return (
        <div>
           {/*  {console.log("JSX Console")} */}
            <h2>{title} Image Component</h2>
            <img src={image} width={300} height={300}></img>
            <br></br>
            <br></br>
            <button onClick={()=>{
                setImage("https://miro.medium.com/v2/resize:fit:900/1*o5FmjKTPdJTbhGE2MIjo6w.jpeg")
            }}>SpringBoot</button>&nbsp;&nbsp;
            <button onClick={()=>{
                setTitle("SpringBoot");
            }}>Change Title</button>
        </div>
    );  
}
export default Image;