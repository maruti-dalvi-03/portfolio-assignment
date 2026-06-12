"use client";

import React from "react";
import { testimonials } from "@/data/testimonials";
import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper core and styles cleanly
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
  <section
  id="testimonials"
  className="py-20 md:py-32 w-full max-w-5xl mx-auto px-4 sm:px-6 overflow-hidden border-b border-card-border testimonial-swiper-wrapper"
>
      
      {/* Modern Centered Section Header */}
      <div className="text-center mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card-bg border border-card-border shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-muted font-bold tracking-wide text-xs uppercase">
            Endorsements
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">
          What People Say
        </h2>

        <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed font-medium">
          Feedback and recommendations from colleagues, mentors, and team leads[cite: 1].
        </p>
      </div>

      {/* Swiper Slider Mount Channel */}
     <div className="pb-12 px-1 sm:px-0">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
         breakpoints={{
           0: {
             slidesPerView: 1.05,
           },
           640: {
             slidesPerView: 1.2,
           },
           768: {
             slidesPerView: 2,
           },
           1024: {
             slidesPerView: 3,
           },
         }}
          className="w-full"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.name} className="py-2">
              <div className="h-full min-h-[220px] sm:min-h-[260px] bg-card-bg border border-card-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-primary/40 transition-all duration-300 shadow-xs hover:shadow-md group">
                
                <div>
                  {/* Glassmorphic Quote Indicator */}
                  <div className="p-2 w-fit rounded-xl bg-background border border-card-border text-primary/40 group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300 mb-5">
                    <Quote className="w-5 h-5" fill="currentColor" strokeWidth={0} />
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-sm sm:text-base text-muted leading-7 italic break-words mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                {/* Footer Meta Row: Initials Bubble and Context Details */}
                <div className="flex items-center gap-3 pt-4 border-t border-card-border/60 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-background border border-card-border flex items-center justify-center font-bold text-xs text-primary group-hover:bg-primary/5 transition-colors shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-black text-sm text-foreground tracking-tight">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-muted font-medium mt-0.5">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Inline Styles inject block to overwrite Swiper default bullet theme colors into your custom --primary token variables natively */}
      <style jsx global>{`
        .testimonial-swiper-wrapper .swiper-pagination-bullet-active {
          background: var(--primary) !important;
          width: 16px !important;
          border-radius: 4px !important;
          transition: all 0.3s ease !important;
        }
        .testimonial-swiper-wrapper .swiper-pagination-bullet {
          background: var(--muted);
          opacity: 0.4;
        }
        .testimonial-swiper-wrapper .swiper-pagination-bullet-active-main {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}