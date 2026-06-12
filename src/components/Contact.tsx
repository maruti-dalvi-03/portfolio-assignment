"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";

// Zod validation schema 
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully!");
      reset(); // Cleanly resets form data buffers upon success
    } catch {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 max-w-2xl mx-auto px-6">
      
      {/* Section Heading */}
      <div className="text-center mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card-bg border border-card-border shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-muted font-bold tracking-wide text-xs uppercase">
            Connect
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">
          Get In Touch
        </h2>

        <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed font-medium">
          Have an interesting project, concept, or technical opportunity? Let&apos;s build something great.
        </p>
      </div>

      {/* Form Area Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-card-bg border border-card-border rounded-[2rem] p-6 sm:p-10 shadow-xl"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          {/* Name Field */}
          <div className="space-y-1.5">
            <input
              {...register("name")}
              placeholder="Your Name"
              disabled={isSubmitting}
              className="w-full p-4 rounded-xl text-sm font-medium bg-background border border-card-border text-foreground placeholder:text-muted/60 focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary/20 disabled:opacity-60 transition-all duration-200"
            />
            {errors.name && (
              <p className="text-red-500 text-xs font-semibold pl-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-1.5">
            <input
              {...register("email")}
              placeholder="Your Email"
              disabled={isSubmitting}
              className="w-full p-4 rounded-xl text-sm font-medium bg-background border border-card-border text-foreground placeholder:text-muted/60 focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary/20 disabled:opacity-60 transition-all duration-200"
            />
            {errors.email && (
              <p className="text-red-500 text-xs font-semibold pl-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message Textarea  */}
          <div className="space-y-1.5">
            <textarea
              {...register("message")}
              rows={5}
              placeholder="Your Message"
              disabled={isSubmitting}
              className="w-full p-4 rounded-xl text-sm font-medium bg-background border border-card-border text-foreground placeholder:text-muted/60 focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary/20 disabled:opacity-60 transition-all duration-200 resize-none"
            />
            {errors.message && (
              <p className="text-red-500 text-xs font-semibold pl-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Action Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={!isSubmitting ? { scale: 1.01, y: -1 } : {}}
            whileTap={!isSubmitting ? { scale: 0.99 } : {}}
            className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-sm tracking-wide shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing Message...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}