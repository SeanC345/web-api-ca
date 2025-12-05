import { createContext, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [error, setError] = useState(null);

  const queryClient = useQueryClient();

  const login = async (username, password) => {
    setError(null);

    const response = await fetch("http://localhost:8080/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      setError(data.msg || "Login failed");
      throw new Error(data.msg || "Login failed");
    }

    localStorage.setItem("user", username);
    localStorage.setItem("token", data.token);

    setUser(username);
    setToken(data.token);
    queryClient.invalidateQueries(["favorites"]);
  };

  const signup = async (username, password) => {
    setError(null);

    const response = await fetch(
      "http://localhost:8080/api/users?action=register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      }
    );

    const data = await response.json();

    if (!response.ok || !data.success) {
      setError(data.msg || "Signup failed");
      throw new Error(data.msg || "Signup failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
    queryClient.removeQueries(["favorites"]);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, signup, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
