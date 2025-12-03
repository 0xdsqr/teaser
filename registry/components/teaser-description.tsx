import { Slot } from "@radix-ui/react-slot"
import type * as React from "react"
import { cn } from "@/lib/utils"

export function TeaserDescription({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"p"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "p"

  return (
    <Comp
      data-slot="teaser-description"
      className={cn(
        "text-sm sm:text-base text-muted-foreground text-pretty max-w-md",
        className,
      )}
      {...props}
    />
  )
}
