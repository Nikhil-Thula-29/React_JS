
import './Navbar.css';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import homeContext from '../context-api/MyHomeContext';
import { useState } from 'react';

function Navbar(){
    let info=useContext(homeContext);
    return(
        <div class="header">
            <div class="leftPanel flexContainer">
                <h1 style={{fontSize:"20px"}}>React-Routing</h1> 
            </div>
            <div class="rightPanel flexContainer">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/allproducts">AllProducts</Link>
                <Link to="/counter">Counter</Link>
                <Link to="/imagecomp">ImageComp</Link>
                <Link to="/usernames">UserNames</Link>
                <Link to="/parenting">Parenting</Link>
                <Link to="/assignment">Assignment</Link>
                <Link to="/context-api">Context-API</Link>
                <span className="separator">{info}</span>
            </div>
        </div>
    );
}
export default Navbar;