import "./Login.css";
import { useState } from "react";
import { AuthContext } from "../authentication/AuthProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

let[username,setUsername]=useState("");
let[password,setPassword]=useState("");
const navigate=useNavigate();
const {isLoggedIn,user,login,logout}=useContext(AuthContext);
const handleLogin=()=>{
    const success=login(username,password);
    if(success){
        navigate("/home");
    }
}
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login Details</h2>
        <input type="text" placeholder="Username" onChange={(event)=>{
            setUsername(event.target.value);
        }}/>
        <input type="password" placeholder="Enter Password" onChange={(event)=>{
            setPassword(event.target.value);
        }}/>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;