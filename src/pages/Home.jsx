import supabase from "../db/supabase";
import { useEffect, useState } from "react";
import { AnimatedBackground } from '../components/AnimatedBackground';
import { FloatingSkills } from '../components/FloatingSkills';
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { FilterBar } from "../components/FilterBar";
import { CreateTradeForm } from "../components/CreateTradeForm";

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
    <div className="min-h-screen bg-primary-dark">
      {/* Header */}
      <Navbar userName={userName} />

      {/* Animated BG component */}
      <AnimatedBackground />

      {/* Skills component */}
      <FloatingSkills />
      
      {/* Main content */}
      <main className="mx-auto">
        {/* Hero Section */}
        <Hero />

        {/* Filter Bar */}
        <FilterBar />

      </main>

      {/* Create Form Overlay */}
      <CreateTradeForm />
    </div>
  );
}