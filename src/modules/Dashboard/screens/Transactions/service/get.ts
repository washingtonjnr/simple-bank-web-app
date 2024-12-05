import { api } from "../../../../../core/services/api";
import { getUserIdFromToken } from "../../../../../core/utils/extractJwt";
//
import { TransactionResponse } from "../types/transactionResponse";

export async function get(id: string): Promise<TransactionResponse> {
  const userId = await getUserIdFromToken();

  try {
    const { data } = await api.get<TransactionResponse>(`/transactions/${id}`);

    if (data.userId !== userId) {
      throw new Error("Esta transação não pertence ao usuário atual");
    }

    return data;
  } catch (error) {
    throw new Error("Falha ao buscar a transação");
  }
}
