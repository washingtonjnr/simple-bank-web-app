// Components
// Hook
// Types
import { BankAccountTypes } from "../../types/BankAccount";
// Utils
import { cn } from "../../../../../../core/utils/cn";
import { formatCurrency } from "../../../../../../core/utils/formatCurrency";

type CardProps = {
  name: string;
  balance: number;
  showBalance: boolean;
  type: BankAccountTypes;
};

export function AccountCard({ name, balance, showBalance, type }: CardProps) {
  return (
    <div className="h-[200px] flex flex-col justify-between border-b-4 border-red-950 p-4 gap-6 rounded-2xl overflow-hidden bg-white text-gray-800">
      <div>
        {type}

        <p className="mt-3 font-medium tracking-[-0.5px]">{name}</p>
      </div>

      <div>
        <p
          className={cn(
            "font-medium tracking-[-0.5px] blur-md transition-all",
            showBalance && "blur-none"
          )}
        >
          {formatCurrency(balance)}
        </p>

        <small className="text-gray-600 text-sm">Saldo atual</small>
      </div>
    </div>
  );
}
