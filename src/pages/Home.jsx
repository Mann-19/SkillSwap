import supabase from "../db/supabase";
import { useEffect, useState } from "react";
import { AnimatedBackground } from '../components/AnimatedBackground';
import { FloatingSkills } from '../components/FloatingSkills';
import { Navbar } from "../components/Navbar";

export const Home = () => {
  const [userName, setUserName] = useState('');

  async function fetchUser() {
    const { data } = await supabase.auth.getUser();
    setUserName(data?.user?.user_metadata?.display_name);
  }

  useEffect(() => {
    fetchUser();
  }, [])

  return (
    <main className="h-screen w-screen bg-black">
      {/* Animated BG component */}
      <AnimatedBackground />

      {/* Skills component */}
      <FloatingSkills />

      {/* Navbar */}
      <Navbar userName={userName} />

      {/* Hero Section */}
    </main>
  )
}