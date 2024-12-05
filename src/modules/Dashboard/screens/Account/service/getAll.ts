import { api } from "../../../../../core/services/api";
//
import { BankAccountResponse } from "../types/BankAccountResponse";

export async function getAll(): Promise<BankAccountResponse[]> {
  const { data } = await api.get<BankAccountResponse[]>("/bankAccounts");

  return data;
}
