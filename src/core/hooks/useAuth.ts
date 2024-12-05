import { useContext } from "react";
// Contexts
import { AuthContext } from "../contexts/Auth";

export function useAuth() {
  return useContext(AuthContext);
}
