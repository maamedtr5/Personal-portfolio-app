const experienceData = [
 {
    period:"2025-Present",
    role:"Junior Software Engineer",
    company:"NascoTech Limited",
    description:"As a Junior Software Engineer at NascoTech Limited, I contribute to the design, development, and maintenance of modern web applications.Supported API integrations and contributed to delivering scalable, user‑focused solutions.",
    technologies:["JavaScript"," React", "Node.js", "Express", "MongoDB" ]  ,  
    current: true,
 },
 {
    period:"2024-2024",
    role:"Web Developer Intern",
    company:"CocoBod Gh.",
    description:"During my internship at CocoBod Gh., I gained valuable experience in developing and maintaining web applications and hands on experience networks and security. I worked closely with the development team to understand user requirements and contributed to the implementation of responsive web interfaces, enhancing my skills in front‑end development" ,
    technologies:["HTML", "CSS", "JavaScript","PHP"],
    current:false
 },
];

export const Experience = () => {
    return (
    <section id="experience" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>
        <div className="container mx-auto px-6 relative z-10">
        {/*Section header*/}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Building Skills
            <span className="font-serif italic font-normal text-white">
             , One Project at a Time
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, from curious beginner to a budding full‑stack developer.
            I’ve gained hands‑on experience building responsive interfaces, integrating APIs, and exploring backend technologies, all while sharpening my problem‑solving skills. 
            Each project has expanded my toolkit and strengthened my ability to deliver solutions that balance technical precision with user‑focused design.
            
             </p>
        </div>
        {/*Experience timeline*/}
       <div className="relative">
        <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>

        {/*Experience items*/}
         <div className="space-y-12">
            
        {experienceData.map((exp, idx) => (
  <div
    key={idx}
    className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
    style={{ animationDelay: `${(idx + 1) * 150}ms` }}
  >
    {/* Timeline Dot */}
    <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
      {exp.current && (
        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
      )}
    </div>

    {/* Content */}
    <div
      className={`pl-8 md:pl-0 ${
        idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"
      }`}
    >
      <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
        <span className="text-sm text-primary font-medium">{exp.period}</span>
        <h3 className="text-xl font-semibold mt-2" >{exp.role}</h3>
        <p className="text-muted-foreground">{exp.company}</p>
        <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
        <div 
         className={`flex flex-wrap gap-2 mt-4 ${
         idx % 2 === 0 ? "md:justify-end":""
         }`}
         >
          {exp.technologies.map((tech, techidx) => (
            <span
              key={techidx}
              className="px-3 py-1 text-xs rounded-full bg-surface border border-border/50 text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
))}
        </div>
        </div>
        </div>
    </section>
    );
  };
