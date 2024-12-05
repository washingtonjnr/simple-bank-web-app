import { api } from "../../../../../core/services/api";

export async function remove(id: string): Promise<boolean> {
  await api.delete(`/bankAccounts/${id}`);

  return true;
}
