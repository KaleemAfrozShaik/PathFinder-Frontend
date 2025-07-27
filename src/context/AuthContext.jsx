import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const AuthContext = createContext(); 

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const fetchUser = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/api/v1/users/me`, {
        withCredentials: true,
      });
      setUser(res.data?.data || null);
    } catch (err) {
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);