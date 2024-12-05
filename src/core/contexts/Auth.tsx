import { createContext, useCallback, useState } from "react";
// Config
import { localStorageKeys } from "../config/localStorageKeys";
// Components
import { LaunchScreen } from "../../shared/components/LaunchScreen";
// Hooks
import { useUser } from "../hooks/useUser";
// Services
import { UserResponse } from "../services/users/@type";

type AuthContextValue = {
  // Selects
  user: UserResponse | undefined;
  signedIn: boolean;
  // Dispatchs
  updateSignedIn(accessToken: string): void;
  removeSignedIn(): void;
};

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAcessToken = window.localStorage.getItem(
      localStorageKeys.ACCESS_TOKEN
    );

    return !!storedAcessToken;
  });

  // Get user
  const { user, isLoading, isSuccess } = useUser(signedIn);

  // Auth user
  const updateSignedIn = useCallback((accessToken: string) => {
    window.localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

    setSignedIn(true);
  }, []);

  // Exit
  const removeSignedIn = useCallback(() => {
    window.localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);

    setSignedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        // Selects
        user: user,
        signedIn: isSuccess && signedIn,
        // Dispatchs
        updateSignedIn,
        removeSignedIn,
      }}
    >
      {/* Page loading */}
      <LaunchScreen isLoading={isLoading} />

      {!isLoading && children}
    </AuthContext.Provider>
  );
}
