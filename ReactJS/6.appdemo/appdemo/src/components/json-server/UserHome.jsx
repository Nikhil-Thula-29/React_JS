import NewUser from "./NewUser";
import UsersJson from "./UsersJson";
import { useState } from "react";
import axios from "axios";

function UserHome(){

    
    let[users,setState]=useState([]);
    let[isNewUser,setIsNewUser]=useState(true);
    let[newuser,setNewUser]=useState({
        name:"",
        city:""
    });
     const getUsers=()=>{
        axios.get("http://localhost:3000/result")
        .then((res)=>{
            //console.log(res.data);//Here .data is data in json after printing res we will get to know so keep res.data
            setState(res.data); //If we dont update setState then users length will be 0 then table wont print
        })
        .catch(()=>{
            alert("Some thing went wrong..");
        })
    };

    return (
        <div  style={{display:"flex",justifyContent:"space-evenly"}}>
            <NewUser getUsers={getUsers} isNewUser={isNewUser} setNewUser={setNewUser} newuser={newuser} setIsNewUser={setIsNewUser}/>
            <UsersJson getUsers={getUsers} users={users} setIsNewUser={setIsNewUser} setNewUser={setNewUser} />
        </div>
    );
}
export default UserHome;