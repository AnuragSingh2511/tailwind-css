import React from "react";
import { cn } from "../lib/utils";

// export function Container ({
//   children,
//   className,
// }:{
//   children: React.ReactNode;
//   className?: string;
// }) {
//   console.log(className);
//   return <div className= {cn("max-w-4xl mx-auto px-4 md:py-8", className)}>{children}</div>;
// };

// both are not same..major diff bw arrow fn and keyword based fn (interview- javascript)

export const Container = ({
  children,
  className,
}:{
  children: React.ReactNode;
  className?: string;
}) => {
  console.log(className);
  return <div className= {cn("max-w-7xl mx-auto px-4 md:py-8", className)}>
    {children}
    </div>;
};
