import { api } from "../../../../../core/services/api";
import { getUserIdFromToken } from "../../../../../core/utils/extractJwt";
import { TransactionResponse } from "../types/transactionResponse";

export async function remove(id: string): Promise<boolean> {
  const userId = await getUserIdFromToken();

  try {
    const { data } = await api.get<TransactionResponse>(`/transactions/${id}`);

    if (data.userId !== userId) {
      throw new Error("Esta transação não pertence ao usuário atual");
    }

    await api.delete(`/transactions/${id}`);

    return true;
  } catch (error) {
    throw new Error("Falha ao remover a transação");
  }
}
