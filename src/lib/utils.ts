import { twMerge, type ClassNameValue } from "tailwind-merge";

/**
 * Merge Tailwind class names, letting later classes win.
 * `tailwind-merge` already accepts arrays/conditionals, so no extra
 * class-composition library is required.
 */
export function cn(...inputs: ClassNameValue[]) {
  return twMerge(inputs);
}
