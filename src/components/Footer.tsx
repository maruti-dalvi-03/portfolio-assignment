"use client";

import { Heart } from "lucide-react";
import { motion } from "framer-motion";

interface FooterProps {
  profile: {
    name: string;
    socials: {
      github: string;
      linkedin: string;
    };
  };
}

export default function Footer({ profile }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full bg-background border-t border-card-border py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-between gap-6 sm:flex-row">
        
        {/* Left Side: Dynamic Identity Logo */}
        <div className="text-center sm:text-left">
          <p className="text-sm font-bold tracking-tight text-foreground">
            {profile.name}<span className="text-primary">.Dev</span>
          </p>
          <p className="text-xs text-muted/80 font-medium mt-1">
            &copy; {currentYear} All rights reserved.
          </p>
        </div>

        {/* Center Side: Clean Navigation Shortcuts */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold text-muted hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Side: Micro-Interactive Social Icon Anchors */}
        <div className="flex items-center gap-4">
          <motion.a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.05 }}
            className="p-2 rounded-xl bg-card-bg border border-card-border text-muted hover:text-primary hover:border-primary/20 transition-all duration-200"
            aria-label="GitHub Profile"
          >
            {/* <Github className="w-4 h-4" strokeWidth={2.25} /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.95c.58.1.79-.25.79-.56v-2.17c-3.25.7-3.94-1.56-3.94-1.56-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.74 1.27 3.41.97.1-.76.41-1.27.74-1.56-2.6-.3-5.34-1.3-5.34-5.77 0-1.27.46-2.3 1.2-3.11-.12-.3-.52-1.52.12-3.17 0 0 .98-.31 3.2 1.19a11.1 11.1 0 015.82 0c2.22-1.5 3.2-1.19 3.2-1.19.64 1.65.24 2.87.12 3.17.75.81 1.2 1.84 1.2 3.11 0 4.48-2.75 5.47-5.37 5.76.42.37.8 1.1.8 2.22v3.29c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </motion.a>

          <motion.a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.05 }}
            className="p-2 rounded-xl bg-card-bg border border-card-border text-muted hover:text-primary hover:border-primary/20 transition-all duration-200"
            aria-label="LinkedIn Profile"
          >
            {/* <Linkedin className="w-4 h-4" strokeWidth={2.25} /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94v5.66H9.37V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.11 20.45H3.56V9h3.55v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
            </svg>
          </motion.a>
        </div>

      </div>

      {/* Crafted Accent Sub-Text */}
      <div className="max-w-5xl mx-auto text-center mt-8 pt-6 border-t border-card-border/40">
        <p className="inline-flex items-center gap-1.5 text-[10px] font-bold text-muted/60 tracking-wider uppercase select-none">
          <span>Designed & Built with</span>
          <Heart className="w-3 h-3 text-red-500/70 animate-pulse fill-current" />
          <span>using Next.js</span>
        </p>
      </div>
    </footer>
  );
}