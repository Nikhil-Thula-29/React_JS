import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";


function ProtectedRoutes({children}){
    let {isLoggedIn}=useContext(AuthContext);
    if(isLoggedIn){
        return children;
    }else{
        return <Navigate to="/"/>
    }
}
export default ProtectedRoutes;