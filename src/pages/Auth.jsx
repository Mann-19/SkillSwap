import { AnimatedBackground } from "../components/AnimatedBackground"
import { FloatingSkills } from "../components/FloatingSkills"

export const Auth = () => {
  return (
    <>
    <div className="bg-black min-h-[100vh] text-center flex flex-col justify-center">
      <AnimatedBackground />
      <div className="text-white">Authentication page</div>
    </div>
    </>
  )
}