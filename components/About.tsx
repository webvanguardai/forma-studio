"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-36 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left — Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-sm tracking-[0.2em] uppercase text-charcoal/40 font-light">
            About
          </span>
          <h2 className="font-serif text-4xl lg:text-6xl xl:text-7xl font-light mt-6 text-charcoal leading-[1.1]">
            We design spaces that outlast trends.
          </h2>
        </motion.div>

        {/* Right — Description + Photo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-10"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
              alt="Architectural interior detail — Forma Studio"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-6">
            <p className="text-charcoal/60 font-light leading-relaxed">
              Founded in 2016, Forma Studio is a Dubai-based interior design
              practice dedicated to creating spaces of enduring beauty. We
              believe in architecture that serves life — quiet luxury, considered
              materials, and light that transforms.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div>
                <p className="font-serif text-3xl lg:text-4xl font-light text-charcoal">
                  120+
                </p>
                <p className="text-xs tracking-[0.15em] uppercase text-charcoal/40 mt-1">
                  Projects
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl lg:text-4xl font-light text-charcoal">
                  3
                </p>
                <p className="text-xs tracking-[0.15em] uppercase text-charcoal/40 mt-1">
                  Awards
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl lg:text-4xl font-light text-charcoal">
                  10
                </p>
                <p className="text-xs tracking-[0.15em] uppercase text-charcoal/40 mt-1">
                  Years
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
