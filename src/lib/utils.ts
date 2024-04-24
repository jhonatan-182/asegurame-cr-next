import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const saltoLinea = (text = '') => {
  const html = text.replace(/\\n/g, `<br className="salto-linea">`);
  return `${html}`;
};
