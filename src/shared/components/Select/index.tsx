import {
  ChevronDownIcon,
  ChevronUpIcon,
  CrossCircledIcon,
} from "@radix-ui/react-icons";
import * as RdxSelect from "@radix-ui/react-select";
// Utils
import { useState } from "react";
import { cn } from "../../../core/utils/cn";

type SelectProps = {
  error?: string;
  className?: string;
  placeholder: string;
  value?: string;
  isDisabled?: boolean;
  options: { label: string; value: string }[];
  onChange?(value: string): void;
};

export function Select({
  options,
  className,
  placeholder,
  value,
  error,
  isDisabled = false,
  onChange,
}: SelectProps) {
  const [hasValue, setHasValue] = useState<boolean>(!!value);

  function handleSelect(newValue: string) {
    setHasValue(!!newValue);

    onChange?.(newValue);
  }

  return (
    <div className="relative">
      <div className="relative">
        <RdxSelect.Root
          onValueChange={handleSelect}
          value={value}
          disabled={isDisabled}
        >
          <RdxSelect.Trigger
            className={cn(
              "relative w-full h-[52px] pt-4 px-3 text-left rounded-2xl border bg-white border-gray-500 text-gray-800 peer placeholder-shown:pt-0 focus:border-gray-700 outline-none transition-all",
              error && "!border-red-900",
              className
            )}
          >
            <RdxSelect.Value />

            <RdxSelect.Icon className="absolute right-2 top-1/2 -translate-y-1/2">
              <ChevronDownIcon className="w-6 h-6 text-gray-600" />
            </RdxSelect.Icon>
          </RdxSelect.Trigger>

          <RdxSelect.Portal>
            <RdxSelect.Content className="z-[52] overflow-hidden bg-white shadow-md rounded-2xl">
              <RdxSelect.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-gray-800">
                <ChevronUpIcon />
              </RdxSelect.ScrollUpButton>

              <RdxSelect.Viewport className="w-full p-2">
                <RdxSelect.Group>
                  <RdxSelect.Label>
                    <small className="text-xs text-gray-600 mb-2">
                      {placeholder}
                    </small>
                  </RdxSelect.Label>

                  {options.map(({ label, value }) => (
                    <RdxSelect.Item
                      value={value}
                      key={value}
                      className="cursor-pointer p-2 text-gray-800 text-sm rounded-2xl data-[state=checked]:font-bold data-[highlighted]:bg-gray-100 !relative outline-none transition-colors"
                    >
                      <RdxSelect.ItemText className="">
                        {label}
                      </RdxSelect.ItemText>
                    </RdxSelect.Item>
                  ))}
                </RdxSelect.Group>
              </RdxSelect.Viewport>

              <RdxSelect.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-gray-800">
                <ChevronDownIcon />
              </RdxSelect.ScrollDownButton>
            </RdxSelect.Content>
          </RdxSelect.Portal>
        </RdxSelect.Root>

        {placeholder && (
          <label
            className={cn(
              "absolute z-10 top-1/2 left-3 -translate-y-1/2 pointer-events-none text-gray-700  transition-all",
              hasValue && "text-xs top-3.5"
            )}
          >
            {placeholder}
          </label>
        )}
      </div>

      {error && (
        <div className="flex mt-1 gap-2 items-center text-red-900 text-xs">
          <CrossCircledIcon />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
