import { useEffect, useState } from "react";
// Context
import { useDashboard } from "../../hook/useDashboard";
// Hook
// Type
import { useAccountTransactions } from "./hooks/useAccountTransactions";
import { useTransactions } from "./hooks/useTransactions";
import { TransactionFilterRequest } from "./types/transactionRequest";

export function useTransactionsController() {
  const { transactionBeingEdited } = useTransactions();
  const { areValuesVisible, toggleVisibility } = useDashboard();
  // filters
  const [filters, setFilters] = useState<TransactionFilterRequest>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    type: null,
  });
  const [sliderState, setSliderState] = useState(() => ({
    isBeginning: filters.month <= 0,
    isEnd: filters.month >= 11,
  }));
  const [showFiltersModal, setShowFiltersModal] = useState<boolean>(false);
  //
  const {
    data: transactions,
    isFetching: isLoading,
    isInitialLoading,
    refetch,
  } = useAccountTransactions(filters);

  function handleChangeFilter<TFilter extends keyof TransactionFilterRequest>(
    filter: TFilter
  ) {
    return (value: TransactionFilterRequest[TFilter]) => {
      if(value === filters[filter]) return;

      setFilters((prevFilters) => ({ ...prevFilters, [filter]: value }));
    }
  }

  function handleShowFiltersModal() {
    setShowFiltersModal(true);
  }

  function handleCloseFilterModal() {
    setShowFiltersModal(false);
  }

  function handleSliderState(isBeginning: boolean, isEnd: boolean) {
    setSliderState({ isBeginning, isEnd });
  }

  useEffect(() => {
    refetch();
  }, [filters])

  return {
    filters,
    handleChangeFilter,
    //
    transactions: transactions || [],
    isLoading,
    isInitialLoading,
    //
    sliderState,
    handleSliderState,
    showFiltersModal,
    handleShowFiltersModal,
    handleCloseFilterModal,
    //
    areValuesVisible,
    toggleVisibility,
    //
    transactionBeingEdited
  }
}
