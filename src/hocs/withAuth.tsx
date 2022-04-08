import { ComponentType } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";

import { auth } from "@/utils/firebase";

const withAuth = <T extends {}>(WrappedComponent: ComponentType<T>) => {
  function AuthGuard(props: T) {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) return null;
    if (user?.uid) return <WrappedComponent {...props} />;
    return <Navigate replace state={{ from: location }} to="/login" />;
  }
  return AuthGuard;
};

export default withAuth;
