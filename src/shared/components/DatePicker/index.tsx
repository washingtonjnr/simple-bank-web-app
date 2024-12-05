import { DayPicker } from "react-day-picker";
//
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
// Utils
import { capitalizeFirstLetter } from "../../../core/utils/capitalizeFirstLetter";

type DatePickerProps = {
  mode?: "default" | "single" | "multiple" | "range" | any;
  value: Date;
  isDisabled?: boolean;
  onChange?(date: Date): void;
};

export function DatePicker({
  mode,
  value,
  isDisabled,
  onChange,
}: DatePickerProps) {
  return (
    <DayPicker
      locale={ptBR}
      selected={value}
      disabled={isDisabled}
      mode={mode || "single"}
      onSelect={(date: Date | any) => onChange?.(date ?? new Date())}
      classNames={{
        caption:
          "flex items-center justify-between pl-3 font-medium tracking-[-0.5px] text-gray-900",
        nav: "flex gap-1",
        nav_button_next:
          "text-red-800 flex items-center justify-center !bg-transparent",
        nav_button_previous:
          "text-red-800 flex items-center justify-center !bg-transparent",
        head_cell: "uppercase text-xs text-gray-500 font-medium pt-1 pb-2",
        button:
          "text-gray-700 cursor-pointer w-10 h-10 hover:bg-red-100 rounded-full",
        day_today: "bg-gray-100 font-bold text-gray-900",
        day_selected: "!bg-red-900 text-white font-medium",
      }}
      formatters={{
        formatCaption: (date, options) => {
          return (
            <span>
              {capitalizeFirstLetter(format(date, "LLLL yyyy", options))}
            </span>
          );
        },
      }}
    />
  );
}
