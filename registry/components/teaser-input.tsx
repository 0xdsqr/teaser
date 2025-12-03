import type * as React from "react"
import { cn } from "@/lib/utils"
import { Input } from "./input"

export function TeaserInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="teaser-input"
      name="email"
      type="email"
      placeholder="you@example.com"
      required
      className={cn("flex-1", className)}
      {...props}
    />
  )
}
