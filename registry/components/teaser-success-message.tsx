import type * as React from "react"
import { cn } from "@/lib/utils"

export function TeaserSuccessMessage({
  className,
  children = "Thanks! You're on the list.",
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="teaser-success-message"
      className={cn("font-medium text-foreground", className)}
      {...props}
    >
      {children}
    </p>
  )
}
