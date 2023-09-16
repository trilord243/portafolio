import Image from "next/image";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]  ">
      <div className="container  mx-auto py-4 px-12">
        <Hero />
      </div>
    </main>
  );
}
