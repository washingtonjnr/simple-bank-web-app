import { PlusIcon } from "@radix-ui/react-icons";
// Components
import { Dropdown } from "../../../../shared/components/Dropdown";
// Controller
import { useFabController } from "./useFabController";
// Hook
import { useTransactions } from "../../screens/Transactions/hooks/useTransactions";
// Type
import { TransactionTypes } from "../../screens/Transactions/types/transaction";

export function Fab() {
  const { accounts } = useFabController();
  //
  const { openNewTransactionModal } = useTransactions();

  return (
    <div className="fixed right-4 bottom-4 z-10">
      <Dropdown.Root>
        <Dropdown.Trigger>
          <div className="mt-1 w-14 h-14 flex items-center justify-center bg-red-500 rounded-full shadow-lg">
            <PlusIcon className="text-white w-6 h-6" />
          </div>
        </Dropdown.Trigger>

        <Dropdown.Content side="top">
          {accounts.length > 0 && (
            <>
              <Dropdown.Item
                onSelect={() =>
                  openNewTransactionModal(TransactionTypes.EXPENSE)
                }
              >
                <span className="">Nova transação</span>
              </Dropdown.Item>

              {/* <Dropdown.Item
                onSelect={() =>
                  openNewTransactionModal(TransactionTypes.INCOME)
                }
              >
                <span className="">Nova receita</span>
              </Dropdown.Item> */}
            </>
          )}
        </Dropdown.Content>
      </Dropdown.Root>
    </div>
  );
}
