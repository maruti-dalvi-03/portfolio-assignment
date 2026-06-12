"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes"; 
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);


  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-16 h-8 rounded-full bg-card-bg border border-card-border/60 animate-pulse" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-16 h-8 rounded-full bg-card-bg border border-card-border p-1 flex items-center justify-between cursor-pointer select-none focus:outline-hidden group"
      aria-label="Toggle structural appearance theme mode"
    >
      {/* Background sliding capsule track indicator */}
      <motion.div
        className="absolute top-1 bottom-1 left-1 w-6 h-6 rounded-full bg-primary shadow-xs"
        animate={{
          x: isDark ? 32 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
        }}
      />

      {/* Sun Icon  */}
      <div className={`z-10 pl-1.5 transition-colors duration-300 ${!isDark ? "text-white" : "text-muted group-hover:text-foreground"}`}>
        <Sun className="w-3.5 h-3.5" strokeWidth={2.5} />
      </div>

      {/* Moon Icon */}
      <div className={`z-10 pr-1.5 transition-colors duration-300 ${isDark ? "text-white" : "text-muted group-hover:text-foreground"}`}>
        <Moon className="w-3.5 h-3.5" strokeWidth={2.5} />
      </div>
    </button>
  );
}