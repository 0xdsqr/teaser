#!/bin/bash
set -e

REGISTRY_URL="https://raw.githubusercontent.com/dsqr/teaser/main/registry"
TEST_DIR="/tmp/teaser-test-$$"

echo "Testing Teaser Registry..."
echo "Registry: $REGISTRY_URL"
echo "Test Dir: $TEST_DIR"
echo ""

# Create test directory
mkdir -p "$TEST_DIR"
cd "$TEST_DIR"

# Initialize Next.js with shadcn
echo "Setting up test project..."
npm init -y > /dev/null 2>&1
npx create-next-app@latest . --typescript --tailwind --eslint --import-alias "@/*" --no-git > /dev/null 2>&1
npx shadcn-ui@latest init --yes > /dev/null 2>&1

# Install components from registry
echo "Installing components from registry..."
npx shadcn-ui@latest add --registry "$REGISTRY_URL" teaser > /dev/null 2>&1
npx shadcn-ui@latest add --registry "$REGISTRY_URL" teaser-form teaser-button > /dev/null 2>&1
npx shadcn-ui@latest add --registry "$REGISTRY_URL" select > /dev/null 2>&1

# Verify files exist
echo "Verifying installation..."
test -f "components/ui/teaser.tsx" && echo "✓ teaser.tsx" || (echo "✗ teaser.tsx"; exit 1)
test -f "components/ui/teaser-form.tsx" && echo "✓ teaser-form.tsx" || (echo "✗ teaser-form.tsx"; exit 1)
test -f "components/ui/button.tsx" && echo "✓ button.tsx" || (echo "✗ button.tsx"; exit 1)
test -f "lib/utils.ts" && echo "✓ lib/utils.ts" || (echo "✗ lib/utils.ts"; exit 1)

# Create test page
echo "Creating test page..."
cat > app/page.tsx << 'EOF'
'use client'
import { useState } from 'react'
import { Teaser, TeaserHeader, TeaserTitle, TeaserDescription, TeaserIcon, TeaserForm, TeaserInput, TeaserButton, TeaserSuccess, TeaserSuccessIcon, TeaserSuccessMessage } from '@/components/ui/teaser'

export default function Home() {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (email: string) => {
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Teaser>
        <TeaserIcon animated>🚀</TeaserIcon>
        <TeaserHeader>
          <TeaserTitle>Coming Soon</TeaserTitle>
          <TeaserDescription>Be the first to know</TeaserDescription>
        </TeaserHeader>
        {!submitted ? (
          <TeaserForm onEmailSubmit={handleSubmit}>
            <TeaserInput />
            <TeaserButton>Notify Me</TeaserButton>
          </TeaserForm>
        ) : (
          <TeaserSuccess>
            <TeaserSuccessIcon>✨</TeaserSuccessIcon>
            <TeaserSuccessMessage>Thanks!</TeaserSuccessMessage>
          </TeaserSuccess>
        )}
      </Teaser>
    </main>
  )
}
EOF
echo "✓ Test page created"

# Build test
echo "Building..."
npm run build > /dev/null 2>&1
echo "✓ Build successful"

# Cleanup
cd /
rm -rf "$TEST_DIR"

echo ""
echo "✅ All tests passed!"
