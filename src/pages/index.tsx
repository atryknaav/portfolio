import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import TechStack from "./components/TechStack/TechStack";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" bg-[#050505] min-h-screen flex-col static px-3 tb:px-[10vw]">
      <Header />
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}