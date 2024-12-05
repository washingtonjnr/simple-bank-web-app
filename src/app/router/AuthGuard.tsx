import { Navigate, Outlet } from "react-router-dom";
// Hooks
import { useAuth } from "../../core/hooks/useAuth";

type AuthGuardProps = {
  isPrivate: boolean;
};

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const { signedIn } = useAuth();

  if (!signedIn && isPrivate) {
    return <Navigate to="/login" replace />;
  }
  if (signedIn && !isPrivate) {
    return <Navigate to="/" replace />;
  } else {
    return <Outlet />;
  }
}
