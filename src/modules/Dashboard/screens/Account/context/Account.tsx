import { createContext, useCallback, useState } from "react";
import { BankAccount } from "../types/BankAccount";

type AccountContextValue = {
  accountBeingEdited: BankAccount | null;
  openEditAccountModal(bankAccount: BankAccount): void;
  closeEditAccountModal(): void;
};

export const AccountContext = createContext({} as AccountContextValue);

export function AccountProvider({ children }: { children: React.ReactNode }) {
  const [accountBeingEdited, setAccountBeingEdited] =
    useState<BankAccount | null>(null);

  const openEditAccountModal = useCallback((bankAccount: BankAccount) => {
    setAccountBeingEdited(bankAccount);
  }, []);

  const closeEditAccountModal = useCallback(() => {
    setAccountBeingEdited(null);
  }, []);

  return (
    <AccountContext.Provider
      value={{
        accountBeingEdited,
        openEditAccountModal,
        closeEditAccountModal,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}
