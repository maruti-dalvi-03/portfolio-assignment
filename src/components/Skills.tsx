"use client";

import React from "react";
import { skills } from "@/data/skills";
import { motion, Variants } from "framer-motion";

export default function Skills() {
  // Stagger wrapper settings for container child entry controls
  const containerVariants : Variants= {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <section id="skills" className="py-24 md:py-32 max-w-5xl mx-auto px-6 border-b border-card-border">
      
      {/* Section Header */}
      <div className="text-center mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card-bg border border-card-border shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-muted font-bold tracking-wide text-xs uppercase">
            Abilities
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">
          Skills & Technologies
        </h2>

        <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed font-medium">
          Technologies and tools I use to build modern, highly performant full-stack web applications.
        </p>
      </div>

      {/* Modernized Grid Layout (3-Columns on Desktop for optimized structural balancing) */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skills.map((skill) => {
          // Dynamic Lucide assignment declaration mapping
          const IconComponent = skill.icon;
          
          return (
            <motion.div
              key={skill.category}
              variants={cardVariants}
              whileHover={{
                y: -6,
                borderColor: "var(--primary)",
                boxShadow: "0 10px 30px -15px rgba(59, 130, 246, 0.15)",
              }}
              className="bg-card-bg border border-card-border rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                {/* Header Row: Category Label and Lucide Icon Frame */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-base font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                    {skill.category}
                  </h3>
                  
                  <div className="p-2.5 rounded-xl bg-background border border-card-border text-muted group-hover:text-primary group-hover:border-primary/20 group-hover:bg-primary/5 transition-all duration-300">
                    <IconComponent className="w-4 h-4" strokeWidth={2.25} />
                  </div>
                </div>

                {/* Micro-Interactive Technology Tag Grid Container */}
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl bg-background border border-card-border text-xs font-semibold text-muted hover:text-foreground hover:border-foreground/30 transition-all duration-200 cursor-default select-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}