import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const res = await axios.post("http://localhost:4000/api/auth/login", { email, password });
    if (res.data.success) {
      setUser(res.data.user);
      await AsyncStorage.setItem("token", res.data.token);
    }
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
