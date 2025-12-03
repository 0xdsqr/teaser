import type * as React from "react"
import { cn } from "@/lib/utils"

export function TeaserSuccess({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="teaser-success"
      className={cn(
        "flex flex-col items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300",
        className,
      )}
      {...props}
    />
  )
}
