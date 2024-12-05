import { TransactionTypes } from "./transaction";

export type TransactionResponse = {
  id: string;
  userId: string;
  bankAccount?: {
    id: string;
    name: string;
    color: string;
  };
  //
  name: string;
  date: string;
  value: number;
  type: TransactionTypes;
};
