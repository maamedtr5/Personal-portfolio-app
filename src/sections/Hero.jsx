import Button from "../components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const socials = [
  { Icon: GithubIcon, label: "GitHub", href: "https://github.com/maamedtr5" },
  { Icon: LinkedinIcon, label: "LinkedIn", href: "https://gh.linkedin.com/in/maame-abena-adjabeng-052a2b20a" },
];

const skills = [
  "React",
  "Node.js",
  "Express",
  "PostgreSql",
  "Prisma",
  "Vercel",
  "Tailwind CSS",
  "Figma",
  "Git",
  "Neon",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img src="/starry-sky.jpg" alt="Starry Sky" className="w-full h-full object-cover opacity-30" />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-background/40 via-background/85 to-background" />

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <span className="text-sm text-primary tracking-wide">
              Software Engineer
            </span>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
                Full-stack developer.
                <br />
                <span className="font-mono font-medium text-primary text-3xl md:text-4xl lg:text-5xl">
                  React + Node.js.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                I'm Maame Abena, a software engineer who builds scalable,
                user-centric web applications from front to back.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button
                size="lg"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me
                <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton as="a" href="/resume.pdf" download="Maame-Abena-Adjabeng-Resume.pdf">
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Find Me:</span>
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-full border border-border text-foreground hover:border-primary/50 hover:text-primary transition-colors duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Right column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="relative rounded-3xl border border-border p-2">
                <img
                  src="phoenix_logo.png"
                  alt="Maame Abena logo"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills List */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I Work With</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-lg font-semibold text-muted-foreground/60 hover:text-muted-foreground transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
