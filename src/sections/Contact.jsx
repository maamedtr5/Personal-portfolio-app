import { CheckCircle, AlertCircle, Mail, MapPin, Send } from "lucide-react";
import Button from "@/components/Button.jsx";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: "Mail",
    label: "Email",
    value: "maameadjabeng3@gmail.com",
    href: "mailto:maameadjabeng3@gmail.com",
  },
  {
    icon: "MapPin",
    label: "Location",
    value: "Accra,Ghana",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's work{" "}
            <span className="font-serif italic font-normal text-white">
              together.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Have a project in mind? Send a message and I'll get back to you.
          </p>
        </div>

        {/* Two-column grid wrapper */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch">
          {/* Left column: Form */}
          <div className="flex">
            <form className="space-y-6 w-full" onSubmit={handleSubmit}>
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border/50 text-secondary-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border/50 text-secondary-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border/50 text-secondary-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-500"
                      : "bg-red-500/10 border border-red-500/20 text-red-500"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Right column: Contact Info */}
          <div className="flex flex-col justify-center h-full">
            <div className="p-8 rounded-3xl border border-border flex-1">
              {contactInfo.map((item, i) =>
                item.href ? (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      {item.icon === "Mail" ? (
                        <Mail className="w-6 h-6 text-primary" />
                      ) : (
                        <MapPin className="w-6 h-6 text-primary" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-secondary-foreground">{item.label}</p>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      {item.icon === "Mail" ? (
                        <Mail className="w-6 h-6 text-primary" />
                      ) : (
                        <MapPin className="w-6 h-6 text-primary" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-secondary-foreground">{item.label}</p>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};