"use client"

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
   <main className="bg-slate-950 min-h-screen">
      <Navbar/>
      <Hero />
   </main>
  );
}
