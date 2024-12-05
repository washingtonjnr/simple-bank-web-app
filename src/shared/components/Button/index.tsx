import { ComponentProps } from "react";
// Components
import { Spinner } from "../Spinner";
// Utils
import { cn } from "../../../core/utils/cn";

interface ButtonProps extends ComponentProps<"button"> {
  isLoading?: boolean;
  variant?: "DANGER" | "GHOST";
}

export function Button({
  isLoading,
  disabled,
  children,
  className,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn(
        "px-6 h-12 rounded-2xl font-medium text-white bg-red-500 hover:bg-red-600 disabled:text-gray-500 disabled:cursor-not-allowed disabled:bg-gray-300 transition-all",
        variant === "DANGER" &&
          "bg-red-900 text-white border-2 hover:bg-red-800",
        variant === "GHOST" &&
          "!bg-transparent text-gray-900 border-2 border-gray-900 hover:border-gray-600 hover:text-gray-600",
        className
      )}
    >
      {isLoading && <Spinner className="w-6 h-6 fill-white text-gray-300" />}

      {!isLoading && children}
    </button>
  );
}
