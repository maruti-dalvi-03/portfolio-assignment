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