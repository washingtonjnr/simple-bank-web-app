import { BankAccountTypes } from "./BankAccount";

export type BankAccountResponse = {
  id: string;
  name: string;
  currentBalance: number;
  type: BankAccountTypes;
};
