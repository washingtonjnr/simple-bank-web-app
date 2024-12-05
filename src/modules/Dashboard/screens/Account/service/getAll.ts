import { api } from "../../../../../core/services/api";
import { getUserIdFromToken } from "../../../../../core/utils/extractJwt";
//
import { BankAccountResponse } from "../types/BankAccountResponse";

export async function getAll(): Promise<BankAccountResponse[]> {
  const userId = await getUserIdFromToken();

  try {
    const { data } = await api.get<BankAccountResponse[]>("/bankAccounts", {
      params: { userId },
    });

    if (data.length < 1 || data[0]["userId"] !== userId) {
      throw new Error("Conta bancária não encontrada ou não pertence ao usuário");
    }

    return data;
  } catch (error) {
    throw new Error("Falha ao buscar a conta bancária");
  }
}
