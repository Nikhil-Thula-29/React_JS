
import './Navbar.css';
function Navbar(){
    return(
        <div class="header">
            <div class="leftPanel flexContainer">
                <h1>React-Routing</h1> 
            </div>
            <div class="rightPanel flexContainer">
                <a href="">Home</a>
                <a href="">Profile</a>
                <a href="">ContactUs</a>
                <a href="">Login</a>
            </div>
        </div>
    );
}
export default Navbar;