import type * as React from "react"
import { cn } from "@/lib/utils"

export function TeaserHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="teaser-header"
      className={cn("space-y-2", className)}
      {...props}
    />
  )
}
