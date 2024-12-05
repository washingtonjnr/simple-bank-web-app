// Components
// Hook
import { useTransactions } from "../../hooks/useTransactions";
// Types
// Utils
import { cn } from "../../../../../../core/utils/cn";
import { formatCurrency } from "../../../../../../core/utils/formatCurrency";
import { formatDate } from "../../../../../../core/utils/formatDate";
import { Transaction } from "../../types/transaction";

type CardItemProps = {
  showBalance: boolean;
  transaction: Transaction;
};

export function TransactionCard({ showBalance, transaction }: CardItemProps) {
  const { name, type, date, value } = transaction;
  //
  const isExpense = type === "EXPENSE";
  //
  const { openEditTransactionModal } = useTransactions();

  return (
    <div
      role="button"
      className="flex flex-1 bg-white justify-between items-center p-2 md:p-4 rounded-2xl gap-3 md:gap-4 transition-all transform hover:shadow-md duration-300"
      onClick={() => openEditTransactionModal(transaction)}
    >
      <div className="flex flex-1 items-center">
        <div className="ml-2 flex flex-col justify-center">
          <span className="font-bold tracking-[-0.5px]">{name}</span>

          <small className="text-xs  text-gray-600">{formatDate(date)}</small>
        </div>
      </div>

      <span
        className={cn(
          "tracking-[-0.5px] font-medium text-sm md:text-base blur-md transition-all",
          isExpense ? "text-red-800" : "text-teal-900",
          showBalance && "blur-none"
        )}
      >
        {formatCurrency(value)}
      </span>
    </div>
  );
}
