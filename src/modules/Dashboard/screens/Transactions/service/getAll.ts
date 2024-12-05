import { api } from "../../../../../core/services/api";
import { getUserIdFromToken } from "../../../../../core/utils/extractJwt";
//
import { TransactionFilterRequest } from "../types/transactionRequest";
import { TransactionResponse } from "../types/transactionResponse";

export async function getAll(params: TransactionFilterRequest): Promise<TransactionResponse[]> {
  const userId = await getUserIdFromToken();

  const updatedParams = { ...params, userId };

  const { data } = await api.get<TransactionResponse[]>("/transactions", { params: updatedParams });

  let filteredTransactions = data;

  if (params.month && params.year) {
    filteredTransactions = filteredTransactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      return (
        transactionDate.getMonth() === params.month &&
        transactionDate.getFullYear() === params.year
      );
    });
  }

  return filteredTransactions;
}
