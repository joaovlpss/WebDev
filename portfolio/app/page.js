import Image from "next/image";
import HeroSection from "./components/Herosection.jsx";
import Navbar from "./components/Navbar.jsx";
import AboutSection from "./components/AboutSection.jsx";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class="container mt-24 mx-auto py-4">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
