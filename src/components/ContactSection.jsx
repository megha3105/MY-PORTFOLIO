import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIssubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIssubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I will get back to you soon",
      });
      setIssubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Let’s build something great together. I’m open to freelance work,
          collaborations, and exciting new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-card p-8 rounded-lg shadow-xs text-center">
            <h3 className="text-2xl font-semibold mb-10">Contact Information</h3>

            <div className="space-y-10">
              {/* Email */}
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-primary/10 mb-2">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium text-lg">Email</h4>
                <a
                  href="mailto:megha.jain0333@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  megha.jain0333@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-primary/10 mb-2">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium text-lg">Phone</h4>
                <a
                  href="tel:+919993323285"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +91 99 93313285
                </a>
              </div>

              {/* Location */}
            
            </div>

            {/* Socials */}
            <div className="pt-10">
              <h4 className="text-2xl font-semibold mb-4">Connect with Me</h4>
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.linkedin.com/in/megha-jain8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-transform hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-transform hover:scale-110"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://x.com/?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-transform hover:scale-110"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Enter your message"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
