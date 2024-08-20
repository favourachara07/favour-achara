import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// named export 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
