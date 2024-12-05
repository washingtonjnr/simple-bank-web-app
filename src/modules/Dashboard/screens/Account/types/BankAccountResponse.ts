import { BankAccountTypes } from "./BankAccount";

export type BankAccountResponse = {
  id: string;
  name: string;
  userId: string;
  currentBalance: number;
  type: BankAccountTypes;
};
