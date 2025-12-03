"use client"

import { Slot } from "@radix-ui/react-slot"
import { Button } from "@workspace/ui/components/shadcn/button.js"
import { Input } from "@workspace/ui/components/shadcn/input.js"
import { cn } from "@workspace/ui/lib/utils.js"
import type * as React from "react"

function Teaser({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="teaser"
      className={cn(
        "flex flex-col items-center justify-center text-center gap-4 sm:gap-6 p-4 sm:p-6",
        className,
      )}
      {...props}
    />
  )
}

function TeaserIcon({
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

function TeaserHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="teaser-header"
      className={cn("space-y-2", className)}
      {...props}
    />
  )
}

function TeaserTitle({
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

function TeaserDescription({
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

function TeaserContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="teaser-content"
      className={cn("w-full", className)}
      {...props}
    />
  )
}

function TeaserForm({
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

function TeaserInput({
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

function TeaserButton({
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

function TeaserSuccess({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="teaser-success"
      className={cn(
        "flex flex-col items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300",
        className,
      )}
      {...props}
    />
  )
}

function TeaserSuccessIcon({
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

function TeaserSuccessMessage({
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

export {
  Teaser,
  TeaserIcon,
  TeaserHeader,
  TeaserTitle,
  TeaserDescription,
  TeaserContent,
  TeaserForm,
  TeaserInput,
  TeaserButton,
  TeaserSuccess,
  TeaserSuccessIcon,
  TeaserSuccessMessage,
}
