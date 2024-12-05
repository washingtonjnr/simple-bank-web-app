import { useQuery } from "@tanstack/react-query";
// Service
import { transactionService } from "../service/@index";
// Type
import { TransactionFilterRequest } from "../types/transactionRequest";

export function useAccountTransactions(filters: TransactionFilterRequest) {
  const { data, isFetching, isLoading, refetch } = useQuery({
    queryKey: ["transactions", "get-all"],
    queryFn: async() => await transactionService.getAll(filters),
  });

  return {
    refetch,
    data: data ?? [],
    isFetching,
    isInitialLoading: isLoading
  }
}
