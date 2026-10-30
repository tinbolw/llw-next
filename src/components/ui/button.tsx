import { ComponentProps } from "react";

export default function Button({
  className,
  ...props
}: ComponentProps<"button">) {
  const baseClassName =
    "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border " +
    "border-gray-400 rounded shadow transition-all duration-150 ease-in-out " +
    "active:scale-95 active:shadow-inner";
  return (
    <button className={`${baseClassName} ${className}`} {...props}></button>
  );
}
