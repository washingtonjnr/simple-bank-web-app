import { ComponentProps, forwardRef, useState } from "react";
// Icons
import {
  CrossCircledIcon,
  EyeClosedIcon,
  EyeOpenIcon,
} from "@radix-ui/react-icons";
// Utils
import { cn } from "../../../../../core/utils/cn";

interface InputPasswordProps extends ComponentProps<"input"> {
  name: string;
  error?: string;
  placeholder?: string;
}

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  (
    { name, id, className, placeholder, error, ...props }: InputPasswordProps,
    ref
  ) => {
    const inputId = id ?? name;
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState);
    };

    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          name={name}
          id={inputId}
          type={showPassword ? "text" : "password"}
          className={cn(
            "w-full h-[52px] px-3 pt-3.5 pr-12 rounded-2xl border bg-white border-gray-500 text-gray-800 peer placeholder-shown:pt-0 focus:border-gray-700 outline-none transition-all",
            error && "!border-red-900",
            className
          )}
          placeholder=" "
        />

        <label
          htmlFor={inputId}
          className="absolute text-xs top-1.5 left-3 pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
        >
          {placeholder ?? name}
        </label>

        <button
          type="button"
          className="absolute right-3 top-2.5 text-gray-700 p-2"
          onClick={togglePasswordVisibility}
          aria-label="Toggle password visibility"
        >
          {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
        </button>

        {error && (
          <div className="flex mt-1 gap-2 items-center text-red-900 text-xs">
            <CrossCircledIcon />
            <span>{error}</span>
          </div>
        )}
      </div>
    );
  }
);
