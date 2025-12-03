import { Slot } from "@radix-ui/react-slot"
import type * as React from "react"
import { cn } from "@/lib/utils"

export function TeaserIcon({
  className,
  asChild = false,
  animated = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean
  animated?: boolean
}) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      data-slot="teaser-icon"
      aria-hidden="true"
      className={cn(
        "flex items-center justify-center text-5xl sm:text-6xl [&>svg]:size-12 sm:[&>svg]:size-16",
        animated && "animate-bounce",
        className,
      )}
      {...props}
    />
  )
}
