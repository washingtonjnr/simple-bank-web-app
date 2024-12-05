// Context
// Service
import { useTransactions } from "../../hooks/useTransactions";

export function useEditTransactionController() {
  const {
    newTransactionType,
    transactionBeingEdited,
    //
    showEditTransactionModal,
    closeEditTransactionModal,
  } = useTransactions();

  return {
    newTransactionType,
    showEditTransactionModal,
    closeEditTransactionModal,
    transaction: transactionBeingEdited,
  };
}
