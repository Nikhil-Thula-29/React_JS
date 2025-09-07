import { useState } from "react";
import "./NewUser.css";
import axios from "axios";


function NewUser(){

    let[newuser,setNewUser]=useState({
        name:"",
        city:""
    });



    const getNewUser=(e)=>{
         e.preventDefault();
        axios.post('http://localhost:3000/result',newuser)
        .then((res)=>{
            console.log(res.data);
            location.reload("/jsonserver");
        })
        .catch((err)=>{
            console.log(err);
            alert("Something went wrong");
        });
    }

    return (
        <div className="new-user">
            <h2>New Users</h2>
            <form onSubmit={getNewUser}>
            <input type="text" placeholder="username" required
            onChange={(eve)=>{
                setNewUser({...newuser,name:eve.target.value});
            }}/>
            <br></br>
            <br></br>
            <select required onChange={(event)=>{
                setNewUser({...newuser,city:event.target.value});
            }}>
                <option value="">Select City</option>
                <option>City1</option>
                <option>City2</option>
                <option>City3</option>
                <option>City4</option>
                <option>City5</option>
            </select>
            <br></br>
            <br></br>
            <button type="submit">New User</button>
            </form>
        </div>
    );
}
export default NewUser;