import { BankAccountResponse } from "./BankAccountResponse";

export enum BankAccountTypes {
  CHECKING = "CHECKING",
  INVESTMENT = "INVESTMENT",
  CASH = "CASH",
};


export type BankAccount = BankAccountResponse;
