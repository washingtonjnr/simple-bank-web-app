import { useQuery } from "@tanstack/react-query";
import { bankAccountService } from "../service/@index";
// Service

export function useBankAccounts() {
  const { error, data, isFetching, refetch } = useQuery({
    queryKey: ["bank-accounts", "get-all"],
    queryFn: bankAccountService.getAll,
    staleTime: 0,
    gcTime: 0
  });

  return {
    data: data ?? [],
    error,
    isFetching,
    refetch,
  }
}
