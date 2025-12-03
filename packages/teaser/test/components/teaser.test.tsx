import { describe, expect, it } from "bun:test"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
  Teaser,
  TeaserButton,
  TeaserContent,
  TeaserDescription,
  TeaserForm,
  TeaserHeader,
  TeaserIcon,
  TeaserInput,
  TeaserSuccess,
  TeaserSuccessIcon,
  TeaserSuccessMessage,
  TeaserTitle,
} from "../../src/components/teaser"

describe("Teaser Component", () => {
  it("renders teaser root container", () => {
    render(<Teaser>Test Content</Teaser>)
    const teaserEl = document.querySelector('[data-slot="teaser"]')
    expect(teaserEl).toBeInTheDocument()
    expect(teaserEl).toHaveTextContent("Test Content")
  })

  it("renders teaser header", () => {
    render(<TeaserHeader>Header Content</TeaserHeader>)
    const headerEl = document.querySelector('[data-slot="teaser-header"]')
    expect(headerEl).toBeInTheDocument()
    expect(headerEl).toHaveTextContent("Header Content")
  })

  it("renders teaser title", () => {
    render(<TeaserTitle>My Title</TeaserTitle>)
    const titleEl = screen.getByRole("heading", { level: 2 })
    expect(titleEl).toBeInTheDocument()
    expect(titleEl).toHaveTextContent("My Title")
    expect(titleEl).toHaveAttribute("data-slot", "teaser-title")
  })

  it("renders teaser description", () => {
    render(<TeaserDescription>My description</TeaserDescription>)
    const descEl = document.querySelector('[data-slot="teaser-description"]')
    expect(descEl).toBeInTheDocument()
    expect(descEl).toHaveTextContent("My description")
  })

  it("renders teaser content", () => {
    render(<TeaserContent>Content area</TeaserContent>)
    const contentEl = document.querySelector('[data-slot="teaser-content"]')
    expect(contentEl).toBeInTheDocument()
    expect(contentEl).toHaveTextContent("Content area")
  })

  it("renders teaser form with input and button", () => {
    render(
      <TeaserForm>
        <TeaserInput />
        <TeaserButton>Subscribe</TeaserButton>
      </TeaserForm>,
    )

    const formEl = document.querySelector('[data-slot="teaser-form"]')
    expect(formEl).toBeInTheDocument()

    const inputEl = document.querySelector('input[type="email"]')
    expect(inputEl).toBeInTheDocument()
    expect(inputEl).toHaveAttribute("name", "email")

    const buttonEl = screen.getByRole("button", { name: "Subscribe" })
    expect(buttonEl).toBeInTheDocument()
  })

  it("handles email form submission", async () => {
    const user = userEvent.setup()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>
      e.preventDefault()

    render(
      <TeaserForm onSubmit={handleSubmit}>
        <TeaserInput />
        <TeaserButton>Submit</TeaserButton>
      </TeaserForm>,
    )

    const inputEl = document.querySelector(
      'input[type="email"]',
    ) as HTMLInputElement
    const buttonEl = screen.getByRole("button", { name: "Submit" })

    await user.type(inputEl, "test@example.com")
    expect(inputEl.value).toBe("test@example.com")

    await user.click(buttonEl)
  })

  it("calls onEmailSubmit callback when form is submitted", async () => {
    const user = userEvent.setup()
    const handleEmailSubmit = (email: string) => {
      expect(email).toBe("user@example.com")
    }

    render(
      <TeaserForm onEmailSubmit={handleEmailSubmit}>
        <TeaserInput />
        <TeaserButton>Notify</TeaserButton>
      </TeaserForm>,
    )

    const inputEl = document.querySelector(
      'input[type="email"]',
    ) as HTMLInputElement
    const buttonEl = screen.getByRole("button", { name: "Notify" })

    await user.type(inputEl, "user@example.com")
    await user.click(buttonEl)
  })

  it("renders teaser icon", () => {
    render(<TeaserIcon>🚀</TeaserIcon>)
    const iconEl = document.querySelector('[data-slot="teaser-icon"]')
    expect(iconEl).toBeInTheDocument()
    expect(iconEl).toHaveTextContent("🚀")
    expect(iconEl).toHaveAttribute("aria-hidden", "true")
  })

  it("renders teaser icon with animation", () => {
    render(<TeaserIcon animated>🎉</TeaserIcon>)
    const iconEl = document.querySelector('[data-slot="teaser-icon"]')
    expect(iconEl).toHaveClass("animate-bounce")
  })

  it("renders teaser success state", () => {
    render(
      <TeaserSuccess>
        <TeaserSuccessIcon>✓</TeaserSuccessIcon>
        <TeaserSuccessMessage>Success!</TeaserSuccessMessage>
      </TeaserSuccess>,
    )

    const successEl = document.querySelector('[data-slot="teaser-success"]')
    expect(successEl).toBeInTheDocument()

    const successIconEl = document.querySelector(
      '[data-slot="teaser-success-icon"]',
    )
    expect(successIconEl).toBeInTheDocument()
    expect(successIconEl).toHaveTextContent("✓")

    const successMessageEl = document.querySelector(
      '[data-slot="teaser-success-message"]',
    )
    expect(successMessageEl).toBeInTheDocument()
    expect(successMessageEl).toHaveTextContent("Success!")
  })

  it("renders success message with default text", () => {
    render(<TeaserSuccessMessage />)
    const messageEl = document.querySelector(
      '[data-slot="teaser-success-message"]',
    )
    expect(messageEl).toHaveTextContent("Thanks! You're on the list.")
  })

  it("renders button with default text", () => {
    render(<TeaserButton />)
    const buttonEl = screen.getByRole("button", { name: "Notify Me" })
    expect(buttonEl).toBeInTheDocument()
  })

  it("supports asChild prop on title", () => {
    render(
      <TeaserTitle asChild>
        <h1>Custom Heading</h1>
      </TeaserTitle>,
    )
    const headingEl = screen.getByRole("heading", { level: 1 })
    expect(headingEl).toBeInTheDocument()
    expect(headingEl).toHaveAttribute("data-slot", "teaser-title")
  })

  it("supports custom className on all components", () => {
    render(
      <>
        <Teaser className="custom-teaser">Content</Teaser>
        <TeaserTitle className="custom-title">Title</TeaserTitle>
        <TeaserDescription className="custom-desc">Desc</TeaserDescription>
      </>,
    )

    expect(document.querySelector('[data-slot="teaser"]')).toHaveClass(
      "custom-teaser",
    )
    expect(document.querySelector('[data-slot="teaser-title"]')).toHaveClass(
      "custom-title",
    )
    expect(
      document.querySelector('[data-slot="teaser-description"]'),
    ).toHaveClass("custom-desc")
  })
})
