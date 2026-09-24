"use client";

import React, { useState, useEffect, useRef } from "react";
import { heroSlides } from "@/content/site-content";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import gsap from "gsap";

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const stripsRef = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement>(null);
  const currentSlide = heroSlides[currentIndex];

  const totalStrips = 5;

  const handleNext = () => {
    if (isAnimating) return;
    setIsAutoPlaying(false);
    triggerTransition("next");
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAutoPlaying(false);
    triggerTransition("prev");
  };

  const goToSlide = (idx: number) => {
    if (isAnimating || idx === currentIndex) return;
    setIsAutoPlaying(false);
    triggerTransition("jump", idx);
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      triggerTransition("next");
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, currentIndex, isAnimating]);

  const triggerTransition = (direction: "next" | "prev" | "jump", targetIdx?: number) => {
    setIsAnimating(true);

    let newIndex = currentIndex;
    if (direction === "next") newIndex = currentIndex === heroSlides.length - 1 ? 0 : currentIndex + 1;
    else if (direction === "prev") newIndex = currentIndex === 0 ? heroSlides.length - 1 : currentIndex - 1;
    else if (direction === "jump" && targetIdx !== undefined) newIndex = targetIdx;

    setNextIndex(newIndex);

    // Animate text out
    gsap.to(textRef.current, {
      y: -30,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in"
    });

    // Animate strips out
    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentIndex(newIndex);

        // Setup next background behind strips before resetting them
        setTimeout(() => {
          // Reset strips immediately to 0
          gsap.set(stripsRef.current, { y: 0 });

          // Animate text back in
          gsap.fromTo(textRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.1 }
          );

          setIsAnimating(false);

          // Prep the next index for future transitions
          setNextIndex(newIndex === heroSlides.length - 1 ? 0 : newIndex + 1);
        }, 50);
      }
    });

    // Alternate directions for strips
    stripsRef.current.forEach((strip, i) => {
      if (strip) {
        tl.to(strip, {
          y: i % 2 === 0 ? "-100%" : "100%",
          duration: 1.2,
          ease: "power4.inOut"
        }, i * 0.08); // Stagger
      }
    });
  };

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-black">

      {/* BACKGROUND (The "Next" Image waiting to be revealed) */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroSlides[nextIndex].image}
          alt="Next slide"
          className="w-full h-full object-cover"
        />
      </div>

      {/* STRIPS (The "Current" Image being sliced) */}
      <div className="absolute inset-0 z-10 flex w-full h-full">
        {Array.from({ length: totalStrips }).map((_, i) => (
          <div
            key={i}
            ref={el => { stripsRef.current[i] = el; }}
            className="relative w-1/5 h-full overflow-hidden"
          >
            <img
              src={currentSlide.image}
              alt={`Strip ${i}`}
              className="absolute top-0 h-full max-w-none object-cover"
              style={{
                width: "500vw",
                left: `-${i * 100}%`
              }}
            />
          </div>
        ))}
      </div>

      {/* OVERLAY & TEXT CONTENT */}
      <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center px-6 md:px-16 lg:px-24 md:pt-20">
        {/* Global image darkening to ensure contrast */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        {/* Dark Gradient Overlay at the BOTTOM & CENTER for hero text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

        <div className="relative z-30 max-w-3xl pointer-events-auto flex flex-col items-center text-center md:items-start md:text-left" ref={textRef}>
          {/* Category Label */}
          <div className="mb-6 flex items-center justify-center md:justify-start gap-3">
            <span className="inline-block h-px w-8 bg-primary shadow-sm hidden md:block" />
            <motion.span
              animate={{ 
                boxShadow: ["0px 0px 0px rgba(201,168,106,0)", "0px 0px 14px rgba(201,168,106,0.5)", "0px 0px 0px rgba(201,168,106,0)"],
                borderColor: ["rgba(201,168,106,0.3)", "rgba(201,168,106,0.8)", "rgba(201,168,106,0.3)"]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-[10px] sm:text-xs tracking-[0.1em] sm:tracking-[0.22em] uppercase font-medium text-primary px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-black/60 backdrop-blur-md border border-primary/30 shadow-xl whitespace-nowrap"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              CA · Tax · Assurance · Advisory
            </motion.span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-7xl leading-[1.05] mb-6 text-white font-semibold drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]"
            style={{ fontFamily: "var(--font-cormorant)", letterSpacing: "-0.01em", color: "var(--vcmv-cream)" }}
          >
            {currentSlide.heading}
          </h1>

          <p
            className="text-base sm:text-lg text-white/90 mb-10 max-w-lg leading-relaxed font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {currentSlide.body}
          </p>

          <Button
            size="lg"
            onClick={() => document.getElementById(currentSlide.ctaHref.replace('#', ''))?.scrollIntoView({ behavior: "smooth" })}
            className="group bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 text-xs tracking-widest uppercase font-medium shadow-none"
          >
            {currentSlide.cta.replace('→', '').trim()}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* NAVIGATION CONTROLS */}
      <div className="absolute bottom-8 left-6 md:left-16 lg:left-24 right-6 md:right-16 lg:right-24 z-30 flex items-center justify-between border-t border-white/20 pt-6">
        <div className="flex gap-3">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className="group py-2 relative"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <div
                className={`h-[2px] transition-all duration-500 ease-out ${currentIndex === idx ? 'w-12 bg-white' : 'w-4 bg-white/30 group-hover:bg-white/70'}`}
              />
            </button>
          ))}
        </div>

        <div className="flex gap-2 text-white pointer-events-auto">
          <button
            onClick={handlePrev}
            className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

    </section>
  );
}
