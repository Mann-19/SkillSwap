import { AnimatedBackground } from "./components/AnimatedBackground";
import { useAuth } from "./hooks/useAuth";
import { Navigate } from "react-router";

function App() {
  return (
    <main className="bg-black max-h-screen max-w-screen">
      <div className="">
        <AnimatedBackground />
      </div>
    </main>
  )
}

export default App
