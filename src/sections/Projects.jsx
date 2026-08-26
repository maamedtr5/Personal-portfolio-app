import {FaGithub as Github} from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
    {
        title: "Volunteer Web App",
        description: "A web application for managing volunteer activities and registrations. It allows users to browse and sign up for volunteer opportunities, track their volunteer hours, and receive notifications about upcoming events.",
        image: "/nfm-volunteer-homepage.png",
        link: "https://nfm-volunteer.vercel.app/",
        github: "https://github.com/maamedtr5/volunteer-web-app.git",
        tags: ["React", "Node.js", "PostgreSQL", "Express"] 
    },
    {
        title: "Project Two",
        description: "Description for your second project goes here.",
        image: "/placeholder-project.png",
        link: "#",
        github: "#",
        tags: ["React", "TypeScript", "Tailwind"] 
    },
];

export const Projects = () => {
    return ( 
        <section id="projects" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Title */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Featured Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that{" "}
                        <span className="font-serif italic font-normal text-white">
                            make an impact.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A selection of recent work, from web applications to tools that solve real problems.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-colors animate-fade-in md:row-span-1"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                                
                                {/* Overlay Links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full bg-background/80 border border-border hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full bg-background/80 border border-border hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton>
                        View All Projects
                        <ArrowUpRight className="w-5 h-5" />
                    </AnimatedBorderButton>
                </div>
            </div>
        </section>
    );
};