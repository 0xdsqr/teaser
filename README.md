<div align="center">
<img src="./.github/assets/teaser.svg" alt="teaser" width="200"/>

<p align="center">
  <a href="https://github.com/dsqr/teaser"><img src="https://img.shields.io/badge/github-teaser-blue?style=for-the-badge&logo=github" alt="GitHub"></a>
  <a href="#"><img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"></a>
  <a href="#"><img src="https://img.shields.io/badge/react-18%2B-61dafb?style=for-the-badge&logo=react" alt="React"></a>
  <a href="#"><img src="https://img.shields.io/badge/tailwind-css-06b6d4?style=for-the-badge&logo=tailwind-css" alt="Tailwind"></a>
</p>

**Composable coming soon landing page components. Built with React, TypeScript, and Tailwind CSS.**

*Install once. Use everywhere. Zero dependencies.*

</div>

## ⇁ The Problem

Coming soon pages require repetitive boilerplate:
- Email input validation
- Form state management
- Success/error UI states
- Responsive animations
- Theme consistency

Building from scratch every time wastes time and introduces inconsistency.

## ⇁ The Solution

Teaser provides battle-tested, composable components:
- **Self-contained** - Each component works independently
- **Composable** - Combine them exactly how you need
- **Unstyled** - Use with any design system
- **Themeable** - CSS variables for instant customization
- **No dependencies** - Pure React + Tailwind

## ⇁ Installation

Choose your registry:

```bash
npx shadcn-ui@latest add --registry https://raw.githubusercontent.com/dsqr/teaser/main/registry teaser
```

Individual components:

```bash
npx shadcn-ui@latest add --registry https://raw.githubusercontent.com/dsqr/teaser/main/registry teaser-form teaser-button teaser-input
```

All at once:

```bash
npx shadcn-ui@latest add --registry https://raw.githubusercontent.com/dsqr/teaser/main/registry teaser teaser-icon teaser-header teaser-title teaser-description teaser-form teaser-input teaser-button teaser-success teaser-success-icon teaser-success-message
```

## ⇁ Quick Start

```tsx
'use client'

import { useState } from 'react'
import {
  Teaser,
  TeaserHeader,
  TeaserTitle,
  TeaserDescription,
  TeaserIcon,
  TeaserForm,
  TeaserInput,
  TeaserButton,
  TeaserSuccess,
  TeaserSuccessIcon,
  TeaserSuccessMessage,
} from '@/components/ui/teaser'

export default function ComingSoon() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="min-h-screen flex items-center justify-center">
      <Teaser>
        <TeaserIcon animated>🚀</TeaserIcon>

        <TeaserHeader>
          <TeaserTitle>Something Amazing</TeaserTitle>
          <TeaserDescription>
            We're building something cool. Be the first to know.
          </TeaserDescription>
        </TeaserHeader>

        {!submitted ? (
          <TeaserForm onEmailSubmit={(email) => setSubmitted(true)}>
            <TeaserInput placeholder="you@example.com" />
            <TeaserButton>Notify Me</TeaserButton>
          </TeaserForm>
        ) : (
          <TeaserSuccess>
            <TeaserSuccessIcon>✨</TeaserSuccessIcon>
            <TeaserSuccessMessage>Thanks for signing up!</TeaserSuccessMessage>
          </TeaserSuccess>
        )}
      </Teaser>
    </main>
  )
}
```

That's it. Deploy it.

## ⇁ Usage

### Container Components

**`<Teaser />`** - Root container
```tsx
<Teaser className="max-w-md">
  {/* Content goes here */}
</Teaser>
```

**`<TeaserHeader />`** - Wraps title and description
```tsx
<TeaserHeader>
  <TeaserTitle>Coming Soon</TeaserTitle>
  <TeaserDescription>Email to stay updated</TeaserDescription>
</TeaserHeader>
```

### Content Components

**`<TeaserIcon />`** - Display icon or emoji
| Prop | Type | Default |
|------|------|---------|
| `animated` | boolean | - |
| `asChild` | boolean | false |

```tsx
<TeaserIcon animated>🚀</TeaserIcon>
<TeaserIcon asChild><CustomIcon /></TeaserIcon>
```

**`<TeaserTitle />`** - Main heading
| Prop | Type | Default |
|------|------|---------|
| `asChild` | boolean | false |

```tsx
<TeaserTitle>Your Title</TeaserTitle>
<TeaserTitle asChild><h1>Custom Heading</h1></TeaserTitle>
```

**`<TeaserDescription />`** - Subtitle text
| Prop | Type | Default |
|------|------|---------|
| `asChild` | boolean | false |

```tsx
<TeaserDescription>Your subtitle</TeaserDescription>
```

### Form Components

**`<TeaserForm />`** - Email form wrapper
| Prop | Type | Default |
|------|------|---------|
| `onEmailSubmit` | (email: string) => void | - |

```tsx
<TeaserForm onEmailSubmit={(email) => handleEmail(email)}>
  <TeaserInput />
  <TeaserButton>Submit</TeaserButton>
</TeaserForm>
```

**`<TeaserInput />`** - Email input field
Auto-validated. Required. Placeholder: "you@example.com"

```tsx
<TeaserInput />
<TeaserInput placeholder="name@company.com" />
```

**`<TeaserButton />`** - Submit button
| Prop | Type | Default |
|------|------|---------|
| `children` | string | "Notify Me" |

```tsx
<TeaserButton>Get Notified</TeaserButton>
```

### Success Components

**`<TeaserSuccess />`** - Success state container
```tsx
<TeaserSuccess>
  <TeaserSuccessIcon>✨</TeaserSuccessIcon>
  <TeaserSuccessMessage>Thanks for signing up!</TeaserSuccessMessage>
</TeaserSuccess>
```

**`<TeaserSuccessIcon />`** - Success icon
| Prop | Type | Default |
|------|------|---------|
| `asChild` | boolean | false |

```tsx
<TeaserSuccessIcon>✨</TeaserSuccessIcon>
<TeaserSuccessIcon asChild><CheckIcon /></TeaserSuccessIcon>
```

**`<TeaserSuccessMessage />`** - Success text
| Prop | Type | Default |
|------|------|---------|
| `children` | string | "Thanks! You're on the list." |

```tsx
<TeaserSuccessMessage>Custom message</TeaserSuccessMessage>
```

## ⇁ API Reference

### Base Components

Components also include reusable base components:

- **`Button`** - Variants: default, destructive, outline, secondary, ghost, link
- **`Input`** - Text input with validation styling
- **`Select`** - Accessible dropdown from Radix UI

Use them independently:

```tsx
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectItem, SelectContent, SelectTrigger } from '@/components/ui/select'
```

### CSS Variables

Customize theming with CSS variables:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --radius: 0.625rem;
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ...dark mode overrides */
}
```

## ⇁ Testing

Test the registry:

```bash
./scripts/test-registry.sh
```

This creates a temporary project, installs components from the registry, and verifies everything works. Run it after pushing changes to ensure the registry is functional.

Test the kitchen sink locally:

```bash
cd examples/kitchen-sink
npm install
npm run dev
```

## ⇁ Development

Install dependencies:

```bash
bun install
```

Build packages:

```bash
cd packages/teaser
bun run build
```

Run kitchen sink:

```bash
cd examples/kitchen-sink
npm run dev
```

## ⇁ Contributing

This is a learning project. Fork it and make it your own.

## ⇁ License

MIT
