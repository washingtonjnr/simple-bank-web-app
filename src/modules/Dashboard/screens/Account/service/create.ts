import { api } from "../../../../../core/services/api";
//
import { BankAccountRequest } from "../types/BankAccountRequest";
import { BankAccountResponse } from "../types/BankAccountResponse";

export async function create(params: BankAccountRequest): Promise<BankAccountResponse> {
  const { data } = await api.post("/bankAccounts", params);

  return data;
}
