"use client";

import Image from "next/image";
import { Download, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  profile: {
    name: string;
    title: string;
    bio: string;
    avatarUrl: string; 
    resume: string;
    socials: {
      github: string;
      linkedin: string;
    };
  };
}

export default function Hero({ profile }: HeroProps) {
  // Staggered Container configuration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 max-w-5xl mx-auto overflow-hidden">
      {/* Ambient background light canvas leak */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">

        {/* Left Side: Modern Typography & Animating Actions */}
        <motion.div 
          className="text-center md:text-left order-2 md:order-1 md:col-span-7 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card-bg border border-card-border shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <p className="text-muted font-medium tracking-wide text-xs uppercase">
              Available for Opportunities
            </p>
          </motion.div>

          <div className="space-y-4">
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-none"
            >
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">{profile.name}</span>
            </motion.h1>
            <motion.h2 
              variants={itemVariants}
              className="text-xl sm:text-2xl font-bold text-foreground/80 tracking-tight"
            >
              {profile.title}
            </motion.h2>
          </div>

          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-base text-muted max-w-lg mx-auto md:mx-0 leading-relaxed font-medium"
          >
            {profile.bio}
          </motion.p>

          {/* Action Call to Action Button */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
            <motion.a
              href={profile.resume}
              download
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-bold rounded-full text-white bg-primary hover:bg-primary-hover shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group"
            >
              <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-4 mt-6 justify-center md:justify-start items-center pt-2">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-muted hover:text-primary transition-colors border border-card-border bg-card-bg/40 px-3 py-1.5 rounded-full hover:border-primary/30 group"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:text-primary transition-all" />
            </a>
            
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-muted hover:text-primary transition-colors border border-card-border bg-card-bg/40 px-3 py-1.5 rounded-full hover:border-primary/30 group"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:text-primary transition-all" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Floating Profile Frame wrapper */}
        <div className="flex justify-center order-1 md:order-2 md:col-span-5 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="relative"
          >
            {/* Backdrop light canvas glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-400 rounded-[2rem] blur-2xl opacity-25 dark:opacity-15" />

            {/* Floating frame wrapper */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-56 h-56 sm:w-72 sm:h-72 bg-card-bg border-2 border-card-border p-3 rounded-[2.5rem] shadow-2xl"
            >
              <div className="relative w-full h-full overflow-hidden rounded-[2rem]">
                <Image
                  src={profile.avatarUrl}
                  alt={profile.name}
                  fill
                  priority
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}