"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85"
        alt="Luxury minimal interior — bright living space with architectural details"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-16 pb-16 lg:pb-24 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="font-serif text-6xl sm:text-7xl lg:text-9xl font-light text-white leading-[0.9] tracking-tight"
        >
          Space.
          <br />
          Crafted.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
          className="mt-6 text-white/80 text-base sm:text-lg max-w-lg font-light leading-relaxed"
        >
          Award-winning interior design for Dubai&apos;s most discerning homes
          and businesses.
        </motion.p>
        <motion.a
          href="#work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8 inline-flex items-center gap-3 text-white/70 text-sm tracking-widest uppercase hover:text-white transition-colors duration-300 w-fit"
        >
          <span>View Work</span>
          <span className="w-12 h-[1px] bg-white/50" />
        </motion.a>
      </div>
    </section>
  );
}
