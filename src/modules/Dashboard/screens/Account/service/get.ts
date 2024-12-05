import { api } from "../../../../../core/services/api";
//
import { BankAccountResponse } from "../types/BankAccountResponse";

export async function get(id: string): Promise<BankAccountResponse> {
  const { data } = await api.get(`/bankAccounts/${id}`);

  return data;
}
