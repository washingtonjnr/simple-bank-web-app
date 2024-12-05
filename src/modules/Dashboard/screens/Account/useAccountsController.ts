import { useMemo, useState } from "react";
// Hooks
import { useWindowWidth } from "../../../../core/hooks/useWindowWidth";
// Internal Hooks
import { useDashboard } from "../../hook/useDashboard";
import { useAccount } from "./hooks/useAccount";
import { useBankAccounts } from "./hooks/useBankAccounts";

export function useAccountController() {
  const windowWidth = useWindowWidth();
  //
  const {
    areValuesVisible,
    toggleVisibility,
    //
  } = useDashboard();
  const {
    openEditAccountModal,
    //
    accountBeingEdited,
  } = useAccount();
  // to components
  const [sliderState, setSliderState] = useState({ // TODO: reset after new account is created
    isBeginning: true,
    isEnd: false,
  });

  const { data, error, isFetching } = useBankAccounts();

  const currentBalance: number = useMemo<number>(() => {
    const balance: number = data.reduce((acc, bankAccount) => {
      return acc + (bankAccount.currentBalance || 0);
    }, 0);

    return balance;
  }, [data]);

  return {
    account: data ? data[0] : null,
    isLoading: isFetching,
    error,
    currentBalance,
    //
    sliderState,
    setSliderState,
    // context
    areValuesVisible,
    toggleVisibility,
    // hooks
    windowWidth,
    //
    accountBeingEdited,
    openEditAccountModal
  }
}
