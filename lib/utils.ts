import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Montserrat } from "next/font/google";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(word: string) {
  return word[0].toUpperCase() + word.substr(1).toLowerCase();
}

export const MontserratFont = Montserrat({
  subsets: ["latin"],
});
