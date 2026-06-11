"use client";

import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      <nav className="bg-background/70 backdrop-blur-md border border-card-border rounded-full shadow-lg">
        <div className="px-6 h-14 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-lg font-bold tracking-tight text-foreground group">
              Maruti<span className="text-primary group-hover:text-primary-hover transition-colors">.Portfolio</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative px-3 py-1.5 text-xs font-semibold text-muted hover:text-foreground transition-colors rounded-full hover:bg-card-bg/60 group"
                >
                  {link.label}
                  {/* Modern Animated Underline indicator */}
                  <motion.span 
                    className="absolute bottom-1 left-3 right-3 h-[2px] bg-primary rounded"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </a>
              ))}
            </div>

            {/* Separation Splitter and Theme Switch */}
            <div className="h-4 w-[1px] bg-card-border" />
            <div className="flex items-center justify-center">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-full text-muted hover:text-foreground hover:bg-card-bg transition-colors focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel with AnimatePresence */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              id="mobile-menu" 
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="md:hidden mt-2 bg-background/95 backdrop-blur-lg border border-card-border rounded-2xl p-4 shadow-xl"
            >
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-muted hover:text-primary hover:bg-card-bg transition-all"
                  >
                    {link.label}
                  </a>
                ))}
                
                <div className="pt-3 mt-2 border-t border-card-border flex items-center justify-between px-4">
                  <span className="text-xs font-semibold text-muted">Appearance</span>
                  <div className="p-1 bg-card-bg rounded-full border border-card-border">
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
}