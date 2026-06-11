import { profile } from "@/data/profile";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero profile={profile} />
      <About/>
      <Skills/>
      <Projects/>
    </>
  );
}