import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "Her professionalism and collaborative spirit make working with her both productive and enjoyable.",
    author: "Mr.Nathaniel",
    role: "Senior Software Engineer,Ghana Cocobod (Information SyS. Dept.)",
  },
  {
    quote: "She adapts quickly to new challenges and shows impressive growth as a developer.",
    author: "Mr.Bright",
    role: "CTO & Senior Software Engineer,NascoTech Limited",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };
  const previous = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Kind words from{" "}
            <span className="font-serif italic font-normal text-white">
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonials content - flex container for alignment */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-center gap-8">
          {/* Quote container */}
          <div className="relative p-8 rounded-3xl md:p-12 border border-border w-full md:w-2/3 animate-fade-in animation-delay-200">
            <Quote className="w-8 h-8 text-primary/50 mb-2" />
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-4">
              "{testimonials[activeIdx].quote}"
            </blockquote>
            <div>
              <div className="font-semibold">{testimonials[activeIdx].author}</div>
              <div className="text-sm text-muted-foreground">{testimonials[activeIdx].role}</div>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            className="p-3 rounded-full border border-border hover:border-primary/40 hover:text-primary transition-all"
            onClick={previous}
          >
            <ChevronLeft />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === activeIdx ? "w-8 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
          <button onClick={next} className="p-3 rounded-full border border-border hover:border-primary/40 hover:text-primary transition-all">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};