"use client";

import React from "react";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 max-w-5xl mx-auto px-6 border-b border-card-border">
      
      {/* Modern Centered Section Heading */}
      <div className="text-center mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card-bg border border-card-border shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-muted font-bold tracking-wide text-xs uppercase">
            Portfolio
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">
          Featured Projects
        </h2>

        <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed font-medium">
          A selection of full-stack development implementations showcasing software engineering practices and complex data workflows.
        </p>
      </div>

      {/* Responsive Cards Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          // Dynamic Lucide assignment declaration mapping
          const IconComponent = project.icon;

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{
                y: -6,
                borderColor: "var(--primary)",
                boxShadow: "0 12px 30px -15px rgba(59, 130, 246, 0.12)",
              }}
              className="bg-card-bg border border-card-border rounded-3xl p-6 flex flex-col justify-between h-full transition-all duration-300 group"
            >
              <div>
                {/* Header Row: Modernized Minimal Lucide Icon Frame */}
                <div className="mb-5 flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-background border border-card-border text-muted group-hover:text-primary group-hover:border-primary/20 group-hover:bg-primary/5 transition-all duration-300">
                    <IconComponent className="w-5 h-5" strokeWidth={2} />
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-foreground tracking-tight mb-2 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Project Description Block */}
                <p className="text-muted text-sm leading-relaxed mb-6 font-medium">
                  {project.desc}
                </p>
              </div>

              <div>
                {/* Tech Stack Badges Container */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-background border border-card-border text-muted group-hover:border-card-border/60 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Functional Action Navigation Anchors Layout */}
                <div className="flex items-center gap-4 pt-2 border-t border-card-border/60">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-muted hover:text-primary transition-colors group/link"
                    >
                      {/* <Github className="w-3.5 h-3.5" strokeWidth={2.25} /> */}
                      <span>Code Base</span>
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-muted hover:text-primary transition-colors group/link"
                    >
                      <ExternalLink className="w-3.5 h-3.5" strokeWidth={2.25} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}