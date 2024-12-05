// Components
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { Spinner } from "../../../../shared/components/Spinner";
// Components (Internal)
// Controller
import { useAccountController } from "./useAccountsController";
// Utils
import { cn } from "../../../../core/utils/cn";
import { formatCurrency } from "../../../../core/utils/formatCurrency";
import { AccountCard } from "./components/AccountCard";

export function Account() {
  const {
    account,
    isLoading,
    //
    currentBalance,
    //
    areValuesVisible,
    toggleVisibility,
  } = useAccountController();

  return (
    <div className="flex flex-col justify-between gap-10 rounded-2xl py-6 px-3 md:p-10 md:h-full text-white bg-red-900">
      {isLoading && (
        <div className="flex flex-1 justify-center items-center my-10">
          <Spinner />
        </div>
      )}

      {!isLoading && (
        <>
          {/* Total balance */}
          <div>
            {/* Subtitle */}
            <h2 className="text-sm md:text-base">Saldo em conta</h2>

            {/* Balance */}
            <div className="flex items-center gap-2 mt-4">
              <strong
                className={cn(
                  "text-2xl tracking-[-0.5px] blur-md transition-all",
                  areValuesVisible && "blur-none"
                )}
              >
                {formatCurrency(currentBalance)}
              </strong>

              <button
                className="p-2 outline-none"
                onClick={() => toggleVisibility()}
              >
                {!areValuesVisible ? <EyeOpenIcon /> : <EyeClosedIcon />}
              </button>
            </div>
          </div>

          {account && (
            <AccountCard
              name={account.name}
              type={account.type}
              balance={account.currentBalance!}
              showBalance={areValuesVisible}
            />
          )}
        </>
      )}
    </div>
  );
}
