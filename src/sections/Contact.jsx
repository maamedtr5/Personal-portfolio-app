import {Mail,MapPin, Send} from "lucide-react";
import Button from "@/components/Button.jsx"
import { useState } from "react";


const contactInfo =[
    {
        icon:"Mail",
        label:"Email",
        value:"maameadjabeng3@gmail.com",
        href:"mailto:maameadjabeng3@gmail.com",
    },
    {
        icon:"MapPin",
        label:"Location",
        value:"Accra,Ghana",
    },
];


export const Contact = () => {
    const[formData,setFormData] =useState({
      name:"",
      email:"",
      message:"",  
    })
    const handleSumbit = async(e) =>{
      e.preventDefault();  
    };
    return (
    <section id="contact" className="py-32 relative overflow-hidden"> 
      <div className="absolute top-0 left-0 w-full h-full"> 
        <div className="absolute top-1/4 w-96 h-96 bg-primary/5 rounded">
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/"/>
        </div>
        </div>

      <div className="container mx-auto px-6 relative z-10">

        {/*Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
         <span className="text-secondary-foreground text-sm font-medium traction">
           Get In Touch 
         </span>
         <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in">
            Let's build {" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
         </h2>
         <p className="text-muted-foreground animate-fade-in animation-delay"> 
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together. 
         </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
         <div className="glass p-8 rounded-3xl border-primary/30 animate-fade-in animation-delay-300">
          <form className="space-y-6">
             <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input  onChange={(e) => setFormData({name:e.target.value })} required placeholder="Your name..." id="name" type="text" className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1-primary outline-none transition all"/>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2"> Email </label>
                <input  required placeholder="your@email.com" id="name" type="email" className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1-primary outline-none transition all"/>
            </div>
             <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea  rows={5} required placeholder="Your message..." id="name" type="text" className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1-primary outline-none transition all resize-none"/>
            </div>
            <button className="w-full" type="submit" size="lg"> Send Message <Send/> </button>
          </form>
         </div>
        </div>
      </div>
    </section>
 );
};