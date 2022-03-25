import { FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";

import { getAuth } from "@/lib/firebase";

const RequireAuth: FC = ({ children }) => {
  const location = useLocation();
  const [user, loading] = useAuthState(getAuth());
  if (loading) return null;
  if (!user) return <Navigate replace state={{ from: location }} to="/login" />;
  return <>{children}</>;
};

export default RequireAuth;
