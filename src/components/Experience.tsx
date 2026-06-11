"use client";

import React from "react";
import { experiences } from "@/data/experience";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 max-w-5xl mx-auto px-6 border-b border-card-border">
      
      {/* Modern Centered Section Header */}
      <div className="text-center mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card-bg border border-card-border shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-muted font-bold tracking-wide text-xs uppercase">
            Journey
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">
          Work Experience
        </h2>

        <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed font-medium">
          My professional timeline and contributions during software engineering roles.
        </p>
      </div>

      {/* Asymmetric Timeline Track Layout */}
      <div className="relative max-w-3xl mx-auto border-l border-card-border pl-6 sm:pl-8 space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.role}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{
              borderColor: "var(--primary)",
              boxShadow: "0 12px 30px -15px rgba(59, 130, 246, 0.08)",
            }}
            className="relative bg-card-bg border border-card-border rounded-3xl p-6 sm:p-8 transition-all duration-300 group"
          >
            {/* Timeline Glowing Node Dot */}
            <span className="absolute -left-[31px] sm:-left-[39px] top-7 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background group-hover:scale-125 transition-transform duration-300" />

            {/* Header Block Matrix */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 pb-4 border-b border-card-border/60">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-primary shrink-0" strokeWidth={2.5} />
                  <h3 className="text-lg font-black text-foreground tracking-tight">
                    {experience.role}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-muted">
                  <span className="text-foreground/90">{experience.company}</span>
                  <span className="text-card-border hidden sm:inline">•</span>
                  <div className="flex items-center gap-1 text-xs">
                    <MapPin className="w-3 h-3" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>

              {/* Duration Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-background border border-card-border text-xs font-bold text-muted h-fit w-fit">
                <Calendar className="w-3.5 h-3.5" />
                <span>{experience.duration}</span>
              </div>
            </div>

            {/* Responsibilities List */}
            <ul className="space-y-3 mb-6">
              {experience.responsibilities.map((responsibility) => (
                <li
                  key={responsibility}
                  className="flex gap-3 text-muted text-sm font-medium leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0 group-hover:bg-primary transition-colors" />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack Horizontal Badges Layer */}
            <div className="pt-4 border-t border-card-border/60">
              <div className="flex flex-wrap gap-1.5">
                {experience.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-background border border-card-border text-muted/90 cursor-default select-none hover:border-foreground/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}