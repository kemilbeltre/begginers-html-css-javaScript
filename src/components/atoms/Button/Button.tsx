import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger";

const VARIANT_STYLES: Record<Variant, string> = {
  primary: "bg-indigo-600 hover:bg-indigo-700 text-white",
  secondary: "bg-indigo-100 hover:bg-indigo-200 text-indigo-700",
  ghost: "text-gray-500 hover:text-gray-800",
  danger: "bg-red-100 hover:bg-red-200 text-red-700",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

export const Button = ({ variant = "primary", children, className = "", ...rest }: ButtonProps) => (
  <button
    className={`font-bold transition-colors ${VARIANT_STYLES[variant]} ${className}`}
    {...rest}
  >
    {children}
  </button>
);
