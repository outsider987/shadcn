import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, prefix, suffix, ...props }, ref) => {
    return (
      <div className={cn("relative flex items-center", className)}>
        {prefix && (
          <div className="absolute left-3 flex items-center pointer-events-none">
            {prefix}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-9 rounded-2xl w-full text-sm font-semibold  bg-[#0000000A] px-5 py-6 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            prefix && "pl-10",

            "shadow-[0px_6px_12px_0px_#00000005]",
            "min-h-[63px]"
          )}
          ref={ref}
          {...props}
        />
        {suffix && (
          <div className="absolute right-3 flex items-center pointer-events-none">
            {suffix}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
