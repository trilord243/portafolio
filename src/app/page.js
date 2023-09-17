import Image from "next/image";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { AboutSection } from "../components/AboutSection";
import { ProjectSection } from "../components/ProjectSection";
import { EmailSection } from "@/components/EmailSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]  ">
      <Navbar />
      <div className="container  mx-auto py-4 px-12 mt-24">
        <Hero />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      {/* <Footer /> */}
    </main>
  );
}
