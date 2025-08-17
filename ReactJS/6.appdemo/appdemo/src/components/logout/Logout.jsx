import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authentication/AuthProvider";
import { useContext } from "react";


function Logout(){
    const{logout}=useContext(AuthContext);
    const navigate=useNavigate();
    const handleLogout=()=>{
          logout();
          navigate("/");
    }

    return (
        <div>
            <h2>Are you sure you want to logout?</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
export default Logout;