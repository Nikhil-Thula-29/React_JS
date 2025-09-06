import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const serverBootId = sessionStorage.getItem("serverBootId");

    if (!serverBootId) {
      sessionStorage.setItem("serverBootId", Date.now());
      localStorage.removeItem("user");
      setIsLoggedIn(false);
      setUser(null);
    } else if (savedUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(savedUser));
    }

    setLoading(false);
  }, []);

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

  if (loading) return <p>Loading...</p>;

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
