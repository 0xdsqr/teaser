import { Slot } from "@radix-ui/react-slot"
import type * as React from "react"
import { cn } from "@/lib/utils"

export function TeaserSuccessIcon({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      data-slot="teaser-success-icon"
      aria-hidden="true"
      className={cn("text-4xl [&>svg]:size-10", className)}
      {...props}
    />
  )
}
