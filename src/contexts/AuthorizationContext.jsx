import { createContext, useContext, useState } from "react";

const AuthorizationContext = createContext();

//fake password
const PASSWORD = "mdweimmf713823csdcnn";

function AuthorizationProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");

  function checkPassword(password) {
    if (password === PASSWORD) setIsAuthenticated(true);
    else setAuthError("Wrong password");
  }

  return (
    <AuthorizationContext.Provider
      value={{ isAuthenticated, checkPassword, authError }}
    >
      {children}
    </AuthorizationContext.Provider>
  );
}

function useAuthorization() {
  const context = useContext(AuthorizationContext);
  if (context === undefined)
    throw new Error("AuthContext was use outside AuthProvider");
  return context;
}

export { AuthorizationProvider, useAuthorization };
