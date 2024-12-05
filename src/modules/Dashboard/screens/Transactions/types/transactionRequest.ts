import { TransactionTypes } from "./transaction";

export type TransactionRequest = {
  bankAccountId: string;
  name: string;
  value: number;
  date: Date;
  type: TransactionTypes;
};

export type TransactionFilterRequest = {
  month: number;
  year: number;
  bankAccountId?: string;
  type: TransactionTypes | null;
}
