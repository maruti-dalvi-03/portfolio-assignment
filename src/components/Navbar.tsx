"use client";

import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrollProgress, setScrollProgress] = useState<number>(0);

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

  // Active Section Highlighting using Intersection Observer
  useEffect(() => {
    const sections = navLinks.map((link) => document.querySelector(link.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll Progress Bar Effect
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-primary z-50 w-full"
        style={{
          scaleX: scrollProgress / 100,
          transformOrigin: "left",
        }}
      />

      {/* Header Container */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-4 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      >
        <nav className="bg-background/70 backdrop-blur-md border border-card-border rounded-full shadow-lg transition-all duration-300">
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
                {navLinks.map((link) => {
                  const isCurrent = activeSection === link.href.replace("#", "");
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className={`relative px-4 py-1.5 text-xs font-bold rounded-full transition-colors duration-300 select-none ${
                        isCurrent ? "text-primary" : "text-muted hover:text-foreground"
                      }`}
                    >
                      <span className="relative z-10">{link.label}</span>
                      
                      {/* Spring LayoutId Active Bubble Overlay */}
                      {isCurrent && (
                        <motion.span
                          layoutId="active-nav-pill"
                          className="absolute inset-0 rounded-full border border-primary/10 bg-primary/5 z-0"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </a>
                  );
                })}
              </div>

              {/* Theme Switch */}
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
                className="inline-flex items-center justify-center p-2 rounded-full text-muted hover:text-foreground hover:bg-card-bg transition-colors focus:outline-none cursor-pointer"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="w-5 h-5 transition-transform duration-200 rotate-90" />
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
                      className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                        activeSection === link.href.replace("#", "")
                          ? "text-primary bg-primary/5 font-bold"
                          : "text-muted hover:text-foreground hover:bg-card-bg"
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                  
                  {/* Dynamic Mobile Appearance Mode row option block */}
                  <div className="pt-4 mt-2 border-t border-card-border flex items-center justify-between px-4">
                    <span className="text-xs font-bold text-muted">Appearance</span>
                    <div className="p-0.5 bg-card-bg rounded-full border border-card-border">
                      <ThemeToggle />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.div>
    </>
  );
}