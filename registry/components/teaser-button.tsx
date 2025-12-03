import type * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./button"

export function TeaserButton({
  className,
  children = "Notify Me",
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      data-slot="teaser-button"
      type="submit"
      className={cn("w-full sm:w-auto", className)}
      {...props}
    >
      {children}
    </Button>
  )
}
