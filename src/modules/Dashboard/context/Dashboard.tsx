import { createContext, useCallback, useEffect, useState } from "react";
//
import { localStorageKeys } from "../../../core/config/localStorageKeys";

type DashboardContextValue = {
  areValuesVisible: boolean;
  toggleVisibility(): void;
};

export const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState<boolean>(() => {
    const areVisible = window.localStorage.getItem(
      localStorageKeys.VISIBLE_VALUES
    );

    return !!areVisible;
  });

  const toggleVisibility = useCallback(() => {
    setAreValuesVisible((prevValue) => !prevValue);
  }, []);

  useEffect(() => {
    window.localStorage[areValuesVisible ? "setItem" : "removeItem"](
      localStorageKeys.VISIBLE_VALUES,
      "YES"
    );
  }, [areValuesVisible]);

  return (
    <DashboardContext.Provider
      value={{
        areValuesVisible,
        toggleVisibility,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
