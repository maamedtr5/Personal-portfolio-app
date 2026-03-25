import  Button from "../components/Button";
 import {
  ArrowRight,
  Download,
  } from "lucide-react";
import {useState} from "react";

// Simple seeded random function for deterministic randomness
const seededRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}; 

function FloatingDot({ index }) {
  const style = {
    backgroundColor: "#0aefdf",
    left: `${seededRandom(index * 1.1) * 100}%`,
    top: `${seededRandom(index * 2.2) * 100}%`,
    animation: `slow-drift ${15 + seededRandom(index * 3.3) * 20}s ease-in-out infinite`,
    animationDelay: `${seededRandom(index * 4.4) * 5}s`,
  };

  return (
    <div
      className="absolute w-1.5 h-1.5 rounded-full opacity-60"
      style={style}
    />
  );
}

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/Starry Sky.jpg"
          alt="Starry Sky"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {Array.from({ length: 30 }).map((_, index) => (
          <FloatingDot key={index} index={index} />
        ))}
      </div>

      {/* Content */}
      <div className=" container mx-auto px-6 pt-32 pb-20 relative z-10 "> 
        <div className="grid lg:grid-cols-2 gap-12 items-center"> 
          {/*left column - Text Content*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary ">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>Software Engineer • Full Stack Developer 
             </span>
            </div>

            {/*Headline*/}
            <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animate-fade-in animation-delay-100 ">
              Crafting <span className="text-primary glow-text"> seamless</span>
              <br/>digital 
              <span className="font-serif italic font-normal text-white">
                <br/>
                <span className="font-serif italic font-normal text-white "/>journeys</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
               Hi, I’m Maame Abena, a software builder.  
                I specialize in React and Node.js, leveraging modern backend technologies to deliver scalable solutions.
                My focus is on crafting user‑centric digital experiences that bring client visions to life.
                Every project is an opportunity to merge creativity with reliable engineering.
            </p>
            </div>  
            {/*CTA Buttons*/}
            <div className=" flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">Contact Me
                <ArrowRight className ="w-5 h-5" />
              </Button>
            </div>
          </div>
          {/*right column - profile Image*/}
       </div>
      </div>
    </section>
  );
};
