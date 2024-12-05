import { useBankAccounts } from "../../screens/Account/hooks/useBankAccounts";

export function useFabController() {
  const { data } = useBankAccounts();

  return {
    accounts: data ?? [],
  }
}
