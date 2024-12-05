import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { cn } from "../../../../../core/utils/cn";

type ArrowButtonProps = {
  className?: string;
  onClick(): void;
  disabled?: boolean;
  direction: "left" | "up" | "right" | "down";
};

export function ArrowButton({
  className,
  onClick,
  disabled,
  direction,
}: ArrowButtonProps) {
  return (
    <button
      disabled={disabled}
      className={cn(
        "rounded-full enabled:hover:bg-black/15 disabled:text-gray-400/50 p-2 transition-colors",
        className
      )}
      onClick={onClick}
    >
      {direction === "left" && (
        <ChevronLeftIcon className={"w-5 h-5 md:w-6 md:h-6 box-content"} />
      )}

      {direction === "up" && (
        <ChevronUpIcon className={"w-5 h-5 md:w-6 md:h-6 box-content"} />
      )}

      {direction === "right" && (
        <ChevronRightIcon className={"w-5 h-5 md:w-6 md:h-6 box-content"} />
      )}

      {direction === "down" && (
        <ChevronDownIcon className={"w-5 h-5 md:w-6 md:h-6 box-content"} />
      )}
    </button>
  );
}
