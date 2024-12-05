import { useContext } from "react";
//
import { AccountContext } from "../context/Account";

export function useAccount() {
  return useContext(AccountContext);
}
