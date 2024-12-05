import { useContext } from "react";
//
import { TransactionsContext } from "../context/Transactions";

export function useTransactions() {
  return useContext(TransactionsContext);
}
