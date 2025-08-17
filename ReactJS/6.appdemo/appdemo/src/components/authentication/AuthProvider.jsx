
import { Children, createContext,useState } from "react";



export const AuthContext=createContext();

function AuthProvider({ children }){

    let [isLoggedIn,setIsLoggedIn]=useState(false);
    let [user,setUser]=useState("");

     const login=(username,password)=>{
        if(username==='nikhil' && password=='123'){
            setIsLoggedIn(true);
            setUser({username});
            console.log(isLoggedIn);
            return true;
        }else{
            alert("Invalid credentials!");
            return false;
        }
    }

    const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

    return (
        <AuthContext.Provider value={{isLoggedIn, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthProvider;