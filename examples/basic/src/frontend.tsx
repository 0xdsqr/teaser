import { createRoot } from "react-dom/client"
import { App } from "./App"

const elem = document.getElementById("root")!

if (import.meta.hot) {
  if (!import.meta.hot.data.root) {
    import.meta.hot.data.root = createRoot(elem)
  }
  const root = import.meta.hot.data.root
  root.render(<App />)
} else {
  createRoot(elem).render(<App />)
}
