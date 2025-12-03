import {
  Teaser,
  TeaserButton,
  TeaserContent,
  TeaserDescription,
  TeaserForm,
  TeaserHeader,
  TeaserIcon,
  TeaserInput,
  TeaserTitle,
} from "@dsqr/teaser"

export function App() {
  const handleEmailSubmit = (email: string) => {
    console.log("Email submitted:", email)
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Teaser>
        <TeaserIcon>🚀</TeaserIcon>
        <TeaserHeader>
          <TeaserTitle>Join the Waitlist</TeaserTitle>
          <TeaserDescription>
            Be the first to know when we launch
          </TeaserDescription>
        </TeaserHeader>
        <TeaserContent>
          <TeaserForm onEmailSubmit={handleEmailSubmit}>
            <TeaserInput />
            <TeaserButton>Notify Me</TeaserButton>
          </TeaserForm>
        </TeaserContent>
      </Teaser>
    </div>
  )
}

export default App
