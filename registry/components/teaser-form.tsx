import type * as React from "react"
import { cn } from "@/lib/utils"

export function TeaserForm({
  className,
  onEmailSubmit,
  ...props
}: React.ComponentProps<"form"> & {
  onEmailSubmit?: (email: string) => void
}) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string

    if (!email) return

    onEmailSubmit?.(email)
    props.onSubmit?.(e)
  }

  return (
    <form
      data-slot="teaser-form"
      onSubmit={handleSubmit}
      className={cn(
        "w-full max-w-sm flex flex-col sm:flex-row gap-2 sm:gap-3",
        className,
      )}
      {...props}
    />
  )
}
