import React, { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";

const UserContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // start as true

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get(
            "http://localhost:4000/api/auth/verify",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.data.success) {
            setUser(response.data.user);
          } else {
            setUser(null);
          }
        } else {
          setUser(null);
        }
      } catch (error) {
  if (error.response) {
    console.error("Verification failed:", error.response.data.message || error.response.data);
  } else if (error.request) {
    console.error("No response received from server:", error.request);
  } else {
    console.error("Error setting up request:", error.message);
  }
  setUser(null);


      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
  <UserContext.Provider value={{ user, login, logout, loading }}>
    {loading ? <div>Loading...</div> : children}
  </UserContext.Provider>
);

};

export const useAuth = () => useContext(UserContext);
export default AuthContextProvider;
