import { useContext } from "react";
//
import { DashboardContext } from "../context/Dashboard";

export function useDashboard() {
  return useContext(DashboardContext);
}
