import { useState } from "react";
import "./NewUser.css";
import axios from "axios";


function NewUser({getUsers,isNewUser,setNewUser,newuser,setIsNewUser}){

    const updateUser=()=>{
        axios.put(`http://localhost:3000/result/${newuser.id}`,newuser)
            .then((res)=>{
                console.log(res.data);
                getUsers();
                setNewUser({
                name: "",
                city: "",
                });
                setIsNewUser(true);
            })
            .catch((error) => {
                alert("Went something wrong while updating User");
                console.log(error);
            });
    }
    const getNewUser=(e)=>{
         e.preventDefault();
        axios.post('http://localhost:3000/result',newuser)
        .then((res)=>{
            //console.log(res.data);
            getUsers(); //This calls getUsers from NewUser props and in that UserHome.jsx getUsers is called so that we are getting updated in table.
            setNewUser({ name: "", city: "" });
        })
        .catch((err)=>{
            console.log(err);
            alert("Something went wrong");
        });
    }

    return (
        <div className="new-user">
            <h2>{isNewUser?"New User" :"Update User"}</h2>
            <form>
            <input type="text" placeholder="username" required
            value={newuser.name} onChange={(eve)=>{
                setNewUser({...newuser,name:eve.target.value});
            }}/>
            <br></br>
            <br></br>
            <select required  value={newuser.city}  onChange={(event)=>{
                setNewUser({...newuser,city:event.target.value});
            }}>
                <option value="">Select City</option>
                <option value="City1">City1</option>
                <option value="City2">City2</option>
                <option value="City3">City3</option>
                <option value="City4">City4</option>
                <option value="City5">City5</option>
            </select>
            <br></br>
            <br></br>
            <button onClick={isNewUser?getNewUser:updateUser}>{isNewUser?"New User" :"Update User"}</button>
            </form>
        </div>
    );
}
export default NewUser;