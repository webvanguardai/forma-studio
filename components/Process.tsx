"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your vision, lifestyle, and spatial needs.",
  },
  {
    number: "02",
    title: "Concept",
    description: "Material palettes, spatial narratives, and design direction.",
  },
  {
    number: "03",
    title: "Design",
    description: "Detailed drawings, 3D visualization, and specification.",
  },
  {
    number: "04",
    title: "Delivery",
    description: "On-site management, installation, and final reveal.",
  },
];

export default function Process() {
  return (
    <section className="py-24 lg:py-36 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <span className="text-sm tracking-[0.2em] uppercase text-white/30 font-light">
            How We Work
          </span>
          <h2 className="font-serif text-4xl lg:text-6xl font-light mt-3 text-white">
            Process
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.15,
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              <span className="font-serif text-5xl lg:text-6xl font-light text-white/10">
                {step.number}
              </span>
              <h3 className="font-serif text-2xl font-light text-white mt-4">
                {step.title}
              </h3>
              <p className="text-white/40 font-light text-sm leading-relaxed mt-3">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-8 h-[1px] bg-white/15" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
