
import './Navbar.css';
import {Link} from 'react-router-dom';
function Navbar(){
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
            </div>
        </div>
    );
}
export default Navbar;