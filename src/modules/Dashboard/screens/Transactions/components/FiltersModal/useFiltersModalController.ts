import { useState } from "react";
//
import { useBankAccounts } from "../../../Account/hooks/useBankAccounts";
//

export function useFiltersModalController() {
  const { data: accounts } = useBankAccounts();
  //
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<string>();
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  // Swiper YEAR
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  function handleSelectBankAccountId(id: string | undefined) {
    setSelectedBankAccountId(prevValue => prevValue != id ? id : undefined);
  }

  function handleSliderState(isBeginning: boolean, isEnd: boolean, year: number) {
    setSliderState({ isBeginning, isEnd });

    setSelectedYear(year);
  }

  return {
    accounts,
    //
    selectedYear,
    selectedBankAccountId,
    handleSelectBankAccountId,
    //
    sliderState,
    handleSliderState,
  }
}
