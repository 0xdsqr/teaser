import type * as React from "react"
import { cn } from "@/lib/utils"

export function TeaserContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="teaser-content"
      className={cn("w-full", className)}
      {...props}
    />
  )
}
