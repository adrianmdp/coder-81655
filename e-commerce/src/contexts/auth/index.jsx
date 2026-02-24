import { createContext, useState } from "react";

const AuthContext = createContext(null);

// const BrowserRouter = ({ children }) => {}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Code

    setUser({ id: 1, name: "Adrián", email: "asd@asd.com" });
  };

  const register = (name, email, password) => {};

  const recoveryPassword = (email) => {};

  return <AuthContext.Provider value={{ login, register, recoveryPassword, user }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
