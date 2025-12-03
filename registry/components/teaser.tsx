import type * as React from "react"
import { cn } from "@/lib/utils"

export function Teaser({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="teaser"
      className={cn(
        "flex flex-col items-center justify-center text-center gap-4 sm:gap-6 p-4 sm:p-6",
        className,
      )}
      {...props}
    />
  )
}
