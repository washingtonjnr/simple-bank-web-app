import { api } from "../../../../../core/services/api";
//
import { BankAccountRequest } from "../types/BankAccountRequest";

export async function update(id: string, params: BankAccountRequest) {
  const { data } = await api.put(`/bankAccounts/${id}`, params);

  return data;
}


export async function updateBankAccountBalance(bankAccountId: string, transactionValue: number, transactionType: string) {
  try {
    const { data } = await api.get(`/bankAccounts/${bankAccountId}`);

    let newBalance = data.currentBalance;

    if (transactionType === "EXPENSE") {
      newBalance -= transactionValue;
    } else if (transactionType === "INCOME") {
      newBalance += transactionValue;
    }

    await api.put(`/bankAccounts/${bankAccountId}`, {
      ...data,
      currentBalance: newBalance,
    });
  } catch (error) {
    throw new Error("Falha ao atualizar o saldo da conta bancária.");
  }
}
