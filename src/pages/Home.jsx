import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Sections
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Projects } from "../sections/Projects";
import { Experience } from "../sections/Experience";
import { Testimonials } from "../sections/Testimonials";
import { Contact } from "../sections/Contact";

export const Home = () => {
  const { hash } = useLocation();

  // Supports links like "/#contact" coming from other pages (e.g. the blog)
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    // wait a tick so the sections are mounted before scrolling
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
    return () => clearTimeout(timer);
  }, [hash]);

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  );
};
