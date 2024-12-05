import { ChevronDownIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
// Components
import { cn } from "../../../../../core/utils/cn";
import { formatDate } from "../../../../../core/utils/formatDate";
import { DatePicker } from "../../../DatePicker";
import { Popover } from "../../../Popover";

type InputDatePickerProps = {
  error?: boolean;
  className?: string;
  currentValue?: Date;
  isDisabled?: boolean;
  onChange?(date: Date): void;
};

export function InputDatePicker({
  error,
  className,
  currentValue,
  isDisabled = false,
  onChange,
}: InputDatePickerProps) {
  const [value, setValue] = useState<Date>(currentValue ?? new Date());

  function handleSelect(newDate: Date) {
    setValue(newDate);

    onChange?.(newDate);
  }

  return (
    <div className="relative">
      <Popover.Root>
        <Popover.Trigger asChild>
          <button
            className={cn(
              "relative w-full h-[52px] flex items-center justify-between pt-3.5 px-3 text-left rounded-2xl border bg-white border-gray-500 text-gray-800 peer placeholder-shown:pt-0 focus:border-gray-700 outline-none transition-all",
              error && "!border-red-900",
              className,
              value && "pt-4"
            )}
          >
            <span
              className={cn(
                "absolute z-10 top-1/2 left-3 -translate-y-1/2 pointer-events-none text-gray-700  transition-all",
                value && "text-xs top-3.5"
              )}
            >
              Data
            </span>

            {value && <span>{formatDate(value)}</span>}

            {/* suffix */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <ChevronDownIcon className="w-6 h-6 text-gray-600" />
            </div>
          </button>
        </Popover.Trigger>

        <Popover.Content className="w-full flex flex-wrap justify-center">
          <DatePicker
            value={value}
            onChange={(date) => handleSelect(date)}
            isDisabled={isDisabled}
          />
        </Popover.Content>
      </Popover.Root>

      {error && (
        <div className="flex mt-1 gap-2 items-center text-red-900 text-xs">
          <CrossCircledIcon />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
