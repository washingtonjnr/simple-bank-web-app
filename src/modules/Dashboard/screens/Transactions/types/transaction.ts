import { TransactionResponse } from "./transactionResponse";

export enum TransactionTypes {
  "INCOME" = "INCOME",
  "EXPENSE" = "EXPENSE",
};

export type Transaction = TransactionResponse;
