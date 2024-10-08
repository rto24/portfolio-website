import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import { HeroParallax } from "@/components/ui/ProjectParallax";
import { FloatingNav } from "@/components/ui/Navbar";
import { CardDemo } from "@/components/ui/TechCard";
import { AnimatedTooltip } from "@/components/ui/ProfilePic";
import { productItems } from "@/data";
import { navItems } from "@/data";
import { avatarItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center
    flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav 
          navItems={navItems}
        />
        <Hero />
        <AnimatedTooltip 
          items={avatarItems}
        />
        <CardDemo />
        <HeroParallax 
          products={productItems}
        />
      <Contact />
      </div>
    </main>
  );
}

