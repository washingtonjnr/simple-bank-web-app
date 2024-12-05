import { useQuery } from "@tanstack/react-query";
import { bankAccountService } from "../service/@index";
// Service

export function useBankAccounts() {
  const { error, data, isFetching } = useQuery({
    queryKey: ["bank-accounts", "get-all"],
    queryFn: bankAccountService.getAll,
    staleTime: Infinity,
  });

  return {
    data: data ?? [],
    error,
    isFetching,
  }
}
