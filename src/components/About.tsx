"use client";
import { profile } from "@/data/profile";
import { GraduationCap, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 max-w-5xl mx-auto px-6"
    >
      {/* Section Heading */}
      <div className="text-center mb-14">
        <span className="text-primary font-semibold tracking-wider uppercase text-sm">
          About Me
        </span>

        <h2 className="mt-3 text-3xl md:text-4xl font-black text-foreground">
          Education & Career Goals
        </h2>

        <p className="mt-4 text-muted max-w-2xl mx-auto">
          My academic background, technical foundation, and
          professional aspirations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card-bg border border-card-border rounded-3xl p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-primary w-6 h-6" />
            <h3 className="text-xl font-bold text-foreground">
              Education
            </h3>
          </div>

          <div className="space-y-6">
            {profile.education.map((item) => (
              <div key={item.degree}>
                <h4 className="font-semibold text-foreground">
                  {item.degree}
                </h4>

                <p className="text-muted">
                  {item.institution}
                </p>

                <p className="text-sm text-muted">
                  {item.duration}
                </p>

                {"cgpa" in item && (
                  <p className="text-sm font-medium text-primary mt-1">
                    CGPA: {item.cgpa}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Objective Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card-bg border border-card-border rounded-3xl p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-primary w-6 h-6" />
            <h3 className="text-xl font-bold text-foreground">
              Career Objective
            </h3>
          </div>

          <p className="text-muted leading-relaxed">
            {profile.objective}
          </p>
        </motion.div>
      </div>
    </section>
  );
}