import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const tm = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
