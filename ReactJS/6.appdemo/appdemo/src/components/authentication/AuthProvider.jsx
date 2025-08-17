
import { Children, createContext,useEffect,useState } from "react";



export const AuthContext=createContext();

function AuthProvider({ children }){

    const storedUser = localStorage.getItem("user");

    let [isLoggedIn,setIsLoggedIn]=useState(!!storedUser);
    let [user,setUser]=useState(storedUser ? JSON.parse(storedUser) : null);

    useEffect(()=>{
        const savedUser=localStorage.getItem("user");
        if(savedUser){
            setIsLoggedIn(true);
            setUser(JSON.parse(savedUser));
        }
    },[]);

    const login = (username, password) => {
    if (username === "nikhil" && password === "123") {
        const loggedInUser = { username };   
        setIsLoggedIn(true);
        setUser(loggedInUser);
        localStorage.setItem("user", JSON.stringify(loggedInUser)); 
        return true;
    } else {
        alert("Invalid credentials!");
        return false;
    }
    };
    const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("user");
  };

    return (
        <AuthContext.Provider value={{isLoggedIn, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthProvider;