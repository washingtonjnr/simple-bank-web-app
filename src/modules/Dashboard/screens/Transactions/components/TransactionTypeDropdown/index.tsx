import { ChevronDownIcon } from "@radix-ui/react-icons";
// Components
import { Dropdown } from "../../../../../../shared/components/Dropdown";
// Type
import { TransactionTypes } from "../../types/transaction";

type TransactionTypeDropdownProps = {
  value: TransactionTypes | null | undefined;
  onSelect: (type: TransactionTypes | null) => void;
};

type OptionType = {
  icon: React.ReactNode;
  label: string;
  value: TransactionTypes | null;
};

export function TransactionTypeDropdown({
  value,
  onSelect,
}: TransactionTypeDropdownProps) {
  const options: OptionType[] = [
    { icon: <></>, label: "Todas as transações", value: null },
    { icon: <></>, label: "Receita", value: TransactionTypes.INCOME },
    {
      icon: <></>,
      label: "Despesa",
      value: TransactionTypes.EXPENSE,
    },
  ];
  //
  const selectedOption: OptionType | undefined = options.find(
    (option) => option.value === value
  );

  return (
    <Dropdown.Root>
      <Dropdown.Trigger>
        <div className="flex gap-2 items-center">
          {selectedOption?.icon}

          <span className="text-sm text-gray-800 tracking-[-0.5px] font-medium">
            {selectedOption?.label}
          </span>

          <ChevronDownIcon className="text-gray-900 w-5 h-5" />
        </div>
      </Dropdown.Trigger>

      <Dropdown.Content>
        {options.map(({ icon, label, value }) => (
          <Dropdown.Item key={label} onSelect={() => onSelect(value)}>
            {icon}

            <span>{label}</span>
          </Dropdown.Item>
        ))}
      </Dropdown.Content>
    </Dropdown.Root>
  );
}
