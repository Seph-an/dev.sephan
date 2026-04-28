import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge Tailwind classes with conditional logic.
 * Mirrors the shadcn/ui helper used across shared components.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

