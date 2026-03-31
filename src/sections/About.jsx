import { Code2 , Lightbulb , Rocket , Users } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing maintainable,scalable code that stands the test of time.",
    },
    {
        icon:Rocket,
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
    return <section id="about" className="py-32 relative overflow-hidden"> 
        <div className="container mx-auto px-6 realtive z-10">
         <div className="grid lg:rid-cols-2 gap-16 items-center">
          {/*Left Column*/}
          <div className="space-y-8">
            <div className="animate-fade-in" />
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold loading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
             Building the future,
            <span className="font-serif italic font-normal text-white ">  one deliverable at a time</span>
          </h2>
          <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
            <p>
                I'm a passionate software builder and junior developer with a growing track record of crafting digital products that make a difference. 
                My journey began with a curiosity for how the web works, and it has evolved into a commitment to building user‑centric experiences with modern frontend technologies.
                I specialize in React, Node.js, creating everything from sleek landing pages to dynamic portfolio sites. 
                My approach blends technical precision with a designer’s eye for detail, ensuring that every project feels both functional and visually engaging.
            </p>
            <p>
                Beyond coding, I’m deeply curious about the world.
                 I love researching new technologies to stay ahead of industry trends, and I explore anthropology to better understand human culture and connection.
                  These interests fuel my perspective as a developer — reminding me that technology is ultimately about people.
            </p>
            <p>
                When I’m not immersed in code, you’ll find me outdoors enjoying nature, or spending time with friends.
                 Whether it’s hiking, sharing ideas, or simply connecting, these moments recharge me and inspire the creativity I bring back into my work.
            </p>
          </div>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                <p className="text-lg font-medium italic text-foreground">
                    "I build digital experiences that merge innovation with empathy.
                     My goal is to craft software that connects people and ideas, inspired by curiosity for new technologies, a love for understanding human culture, and the creativity I draw from nature and friendships"
                </p>
            </div>
            {/*Right Column - Highlights*/}
            <div className="grid sm:grid-cols-2 gap-6"> 
                {highlights.map((item, idx) => (
                   <div key={idx} className="glass p-6 rounded-2xl animate-fade-in"
                   style={{animationDelay: `${(idx + 1) * 100} ms`}}>
                   <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 ">
                    <item.icon className="w-6 h-6 text-primary"/>
                    </div >
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
};