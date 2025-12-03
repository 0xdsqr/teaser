"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"

export type ThemeName = "default" | "ocean" | "forest" | "sunset" | "midnight"

interface ThemeSwitcherProps {
  value: ThemeName
  onValueChange: (value: ThemeName) => void
}

const themes: {
  value: ThemeName
  label: string
  colors: { bg: string; fg: string }
}[] = [
  {
    value: "default",
    label: "Default",
    colors: { bg: "#ffffff", fg: "#171717" },
  },
  {
    value: "ocean",
    label: "Ocean Breeze",
    colors: { bg: "#f0f7ff", fg: "#1e5a8a" },
  },
  {
    value: "forest",
    label: "Sage Garden",
    colors: { bg: "#f2f7f2", fg: "#2d5a3d" },
  },
  {
    value: "sunset",
    label: "Sunset Horizon",
    colors: { bg: "#fff8f0", fg: "#c65d3b" },
  },
  {
    value: "midnight",
    label: "Cosmic Night",
    colors: { bg: "#1a1a2e", fg: "#a78bfa" },
  },
]

function ThemeSwatch({ colors }: { colors: { bg: string; fg: string } }) {
  return (
    <span
      className="inline-block size-4 rounded border border-border overflow-hidden shrink-0"
      aria-hidden="true"
    >
      <span className="flex h-full">
        <span className="w-1/2 h-full" style={{ backgroundColor: colors.bg }} />
        <span className="w-1/2 h-full" style={{ backgroundColor: colors.fg }} />
      </span>
    </span>
  )
}

export function ThemeSwitcher({ value, onValueChange }: ThemeSwitcherProps) {
  const currentTheme = themes.find((t) => t.value === value)

  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-[180px]">
        <span className="flex items-center gap-2">
          {currentTheme && <ThemeSwatch colors={currentTheme.colors} />}
          <span>{currentTheme?.label ?? "Select theme"}</span>
        </span>
      </SelectTrigger>
      <SelectContent>
        {themes.map((theme) => (
          <SelectItem key={theme.value} value={theme.value}>
            {theme.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
