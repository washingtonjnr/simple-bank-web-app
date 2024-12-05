import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// To tailwind - used to MERGE and write CONDITIONALS in a better way
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(
    ...inputs
  ));
}
