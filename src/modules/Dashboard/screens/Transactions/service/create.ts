import { api } from "../../../../../core/services/api";
import { getUserIdFromToken } from "../../../../../core/utils/extractJwt";
import { bankAccountService } from "../../Account/service/@index";
//
import { TransactionRequest } from "../types/transactionRequest";

// TODO: seria legal se desse para fazer algo atômico
export async function create(payload: TransactionRequest) {
  const userId = await getUserIdFromToken();

  await bankAccountService.updateBankAccountBalance(
    payload.bankAccountId,
    payload.value,
    payload.type,
  );

  const transactionPayload = {
    ...payload,
    userId,
  };

  const { data } = await api.post("/transactions", transactionPayload);

  return data;
}
