import { createContext, useCallback, useState } from "react";
import {
  Transaction,
  TransactionTypes,
} from "../../../../../core/services/transactions/@type";

type TransactionsContextValue = {
  showNewTransactionModal: boolean;
  newTransactionType: TransactionTypes | null;
  openNewTransactionModal(type: TransactionTypes): void;
  closeNewTransactionModal(): void;
  //
  showEditTransactionModal: boolean;
  transactionBeingEdited: Transaction | null;
  openEditTransactionModal(transaction: Transaction): void;
  closeEditTransactionModal(): void;
};

export const TransactionsContext = createContext(
  {} as TransactionsContextValue
);

export function TransactionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showNewTransactionModal, setShowNewTransactionModal] = useState(false);
  const [showEditTransactionModal, setShowEditTransactionModal] =
    useState(false);
  const [newTransactionType, setNewTransactionType] =
    useState<TransactionTypes | null>(null);
  const [transactionBeingEdited, setTransactionBeingEdited] =
    useState<Transaction | null>(null);

  const openNewTransactionModal = useCallback((type: TransactionTypes) => {
    setNewTransactionType(type);
    setShowNewTransactionModal(true);
  }, []);

  const closeNewTransactionModal = useCallback(() => {
    setNewTransactionType(null);
    setShowNewTransactionModal(false);
  }, []);

  const openEditTransactionModal = useCallback((transaction: Transaction) => {
    setTransactionBeingEdited(transaction);
    setNewTransactionType(transaction.type);
    setShowEditTransactionModal(true);
  }, []);

  const closeEditTransactionModal = useCallback(() => {
    setTransactionBeingEdited(null);
    setNewTransactionType(null);
    setShowEditTransactionModal(false);
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        newTransactionType,
        transactionBeingEdited,
        showNewTransactionModal,
        showEditTransactionModal,
        openNewTransactionModal,
        closeNewTransactionModal,
        openEditTransactionModal,
        closeEditTransactionModal,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
