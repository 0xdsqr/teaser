"use client"

import { createFileRoute } from "@tanstack/react-router"
import type React from "react"
import { useState } from "react"
import {
  Teaser,
  TeaserButton,
  TeaserDescription,
  TeaserForm,
  TeaserHeader,
  TeaserIcon,
  TeaserInput,
  TeaserSuccess,
  TeaserSuccessIcon,
  TeaserSuccessMessage,
  TeaserTitle,
} from "@/components/ui/teaser"
import { type ThemeName, ThemeSwitcher } from "../components/theme-switcher"
import { themeStyles } from "../lib/themes"

export const Route = createFileRoute("/")({ component: Page })

function RocketIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
      <path d="M4 17v2" />
      <path d="M5 18H3" />
    </svg>
  )
}

function Page() {
  const [submitted, setSubmitted] = useState(false)
  const [theme, setTheme] = useState<ThemeName>("default")

  const handleSubmit = (email: string) => {
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main
      className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300 p-4 sm:p-6"
      style={themeStyles[theme] as React.CSSProperties}
    >
      <header className="flex justify-end p-3 sm:p-4">
        <ThemeSwitcher value={theme} onValueChange={setTheme} />
      </header>

      <div className="flex-1 flex items-center justify-center p-4 sm:p-6">
        <Teaser className="max-w-md w-full">
          <TeaserIcon animated>
            <RocketIcon />
          </TeaserIcon>

          <TeaserHeader>
            <TeaserTitle>Something Cool is Coming</TeaserTitle>
            <TeaserDescription>
              We're working hard behind the scenes. Drop your email and be the
              first to know when we launch.
            </TeaserDescription>
          </TeaserHeader>

          {!submitted ? (
            <TeaserForm onEmailSubmit={handleSubmit}>
              <TeaserInput placeholder="you@example.com" />
              <TeaserButton>Notify Me</TeaserButton>
            </TeaserForm>
          ) : (
            <TeaserSuccess>
              <TeaserSuccessIcon>
                <SparklesIcon />
              </TeaserSuccessIcon>
              <TeaserSuccessMessage>
                Thanks! You're on the list.
              </TeaserSuccessMessage>
            </TeaserSuccess>
          )}
        </Teaser>
      </div>
    </main>
  )
}
