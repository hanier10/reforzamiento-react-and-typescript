import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

enum AuthStatus {
  "checking" = "checking",
  "authenticated" = "authenticated",
  "unauthenticated" = "unauthenticated",
}

interface User {
  name: string;
  email: string;
}

interface AuthState {
  status: AuthStatus;
  token?: string;
  isChecking: boolean;
  user?: User;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState(AuthStatus.checking);

  useEffect(() => {
    setTimeout(() => {
      setStatus(AuthStatus.unauthenticated);
    }, 1500);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        status: status,

        isChecking: status === AuthStatus.checking,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
