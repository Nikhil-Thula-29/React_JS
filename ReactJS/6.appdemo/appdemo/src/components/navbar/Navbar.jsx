
import './Navbar.css';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import homeContext from '../context-api/MyHomeContext';
import { useState } from 'react';
import CounterRed from '../reducer/CounterRed';
import Logout from '../logout/Logout';
import { AuthContext } from '../authentication/AuthProvider';

function Navbar(){
    let info=useContext(homeContext);
    let {isLoggedIn}=useContext(AuthContext);
    return(
        <div class="header">
            <div class="leftPanel flexContainer">
                <h1 style={{fontSize:"20px"}}>React-Routing</h1> 
            </div>
            <div class="rightPanel flexContainer">
                <Link to="/home">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/allproducts">AllProducts</Link>
                <Link to="/counter">Counter</Link>
                <Link to="/imagecomp">ImageComp</Link>
                {/* <Link to="/usernames">UserNames</Link> */}
                <Link to="/reducerfn">Reducer Function</Link>
                <Link to="/parenting">Parenting</Link>
                <Link to="/redux">Redux</Link>
                <Link to="/assignment">Assignment</Link>
                <Link to="/context-api">Context-API</Link>
                <Link to="/prodwithredux">Products with Redux</Link>
                <Link to="/profile">Profile-QueryParam</Link>
                {
                    isLoggedIn&&<Link to="/logout">Logout</Link>
                }
                
                <span className="separator">{info}</span>
            </div>
        </div>
    );
}
export default Navbar;