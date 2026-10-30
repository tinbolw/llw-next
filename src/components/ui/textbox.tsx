import { ComponentProps } from "react";

export default function TextBox({
  className,
  ...props
}: ComponentProps<"input">) {
  const baseClassName =
    "bg-background border-2 border-foreground rounded-3xl text-foreground " +
    "placeholder:text-foreground p-2 text-center";
  return <input className={`${baseClassName} ${className}`} {...props}></input>;
}
