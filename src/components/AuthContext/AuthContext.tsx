import { createContext, FC, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "@/utils/firebase";

export type IAuthContext = {
  email?: string | null;
  username?: string | null;
  profilePicture?: string | null;
};
const AuthContext = createContext<IAuthContext>({});

const AuthContextProvider: FC = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  if (loading) return <div>Loading</div>;
  return (
    <AuthContext.Provider
      value={{
        email: user?.email,
        profilePicture: user?.photoURL,
        username: user?.displayName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    console.error("context is null");
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};

export default AuthContextProvider;
