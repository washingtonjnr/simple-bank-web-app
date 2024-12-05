import { BankAccountTypes } from "./BankAccount";

export type BankAccountRequest = {
  name: string;
  color: string;
  currentBalance: number;
  type: BankAccountTypes;
};
