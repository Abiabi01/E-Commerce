import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage on app start
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // LOGIN
  const login = ({ email, password }) => {
    // Get registered users from localStorage
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    
    // Find user with matching email
    const user = registeredUsers.find(u => u.email === email);
    
    // Check if user exists and password matches
    if (!user) {
      throw new Error("No account found with this email");
    }
    
    if (user.password !== password) {
      throw new Error("Incorrect password");
    }
    
    // Log in the user
    const loggedInUser = {
      name: user.name,
      email: user.email,
    };
    
    setUser(loggedInUser);
    localStorage.setItem("user", JSON.stringify(loggedInUser));
  };

  // REGISTER
  const register = ({ name, email, password }) => {
    // Get existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    
    // Check if user already exists
    if (existingUsers.find(user => user.email === email)) {
      throw new Error("User with this email already exists");
    }
    
    // Add new user
    const newUser = {
      name,
      email,
      password, // In real app, this should be hashed
    };
    
    existingUsers.push(newUser);
    localStorage.setItem("registeredUsers", JSON.stringify(existingUsers));
    
    // Log in the user after registration
    const loggedInUser = {
      name,
      email,
    };
    
    setUser(loggedInUser);
    localStorage.setItem("user", JSON.stringify(loggedInUser));
  };

  // LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// CUSTOM HOOK
export const useAuth = () => useContext(AuthContext);
