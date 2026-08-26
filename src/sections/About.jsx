import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Fast Performance",
    description: "Optimizing applications for speed and efficiency.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with teams to achieve common goals.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Bringing fresh ideas and creative solutions to the table.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-6 animate-fade-in">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white"> one deliverable at a time</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a software builder and developer focused on crafting user-centric
                digital products with React and Node.js from ideas to fully fleshed-out applications.
              </p>
              <p>
                Outside of code, I'm curious about new technologies and how people use them,
                and I recharge outdoors or with friends both of which shape how I approach
                building software.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in animation-delay-200">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-border hover:border-primary/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
