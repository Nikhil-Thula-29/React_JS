
import React from 'react'
import {useState} from 'react'
function UserNames(){
    let [names,setNames]=useState(["Rohan","Nikhil","Sushmitha","Vamshi","Riya"]);
    return (
        <div style={{textAlign:"left",padding:"50px"}}>
            <h2>UserNames</h2>
            <ul>
                 {
                    names.map((ele)=>{
                    return <li>{ele}</li>
                    
                })
                }
            </ul>
           
        </div>
    );
}
export default UserNames;