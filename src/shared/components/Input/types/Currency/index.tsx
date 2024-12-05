import { CrossCircledIcon } from "@radix-ui/react-icons";
import { NumericFormat } from "react-number-format";
// Utils
import { cn } from "../../../../../core/utils/cn";

type InputProps = {
  className?: string;
  value?: string | number;
  isDisabled?: boolean;
  error?: string;
  placeholder?: string;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
};

export function InputCurrency({
  value,
  placeholder,
  className,
  error,
  isDisabled = false,
  onChange,
}: InputProps) {
  return (
    <div className="relative">
      <NumericFormat
        defaultValue={value}
        thousandSeparator="."
        decimalSeparator=","
        disabled={isDisabled}
        placeholder={placeholder}
        onChange={onChange}
        className={cn(
          "w-full !text-gray-800 text-[32px] font-bold tracking-[-0.5px] !outline-none",
          className
        )}
      />

      {error && (
        <div className="flex mt-1 gap-2 items-center text-red-900 text-xs">
          <CrossCircledIcon />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
