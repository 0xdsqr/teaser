import { Slot } from "@radix-ui/react-slot"
import type * as React from "react"
import { cn } from "@/lib/utils"

export function TeaserTitle({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"h2"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "h2"

  return (
    <Comp
      data-slot="teaser-title"
      className={cn(
        "text-2xl sm:text-3xl font-bold tracking-tight text-balance",
        className,
      )}
      {...props}
    />
  )
}
