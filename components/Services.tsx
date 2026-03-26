"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Full Interior Design",
    description:
      "End-to-end design from concept to completion. We craft spaces that reflect your vision — residential, commercial, or hospitality.",
  },
  {
    number: "02",
    title: "FF&E Procurement",
    description:
      "Sourcing and procurement of furniture, fixtures, and equipment from the world's finest ateliers and manufacturers.",
  },
  {
    number: "03",
    title: "Space Planning",
    description:
      "Strategic spatial analysis and layout optimization. Every square meter considered, every flow intentional.",
  },
  {
    number: "04",
    title: "Project Management",
    description:
      "Seamless coordination from first sketch to final walkthrough. Timelines held, budgets respected, quality uncompromised.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-36 bg-light-grey"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <span className="text-sm tracking-[0.2em] uppercase text-charcoal/40 font-light">
            What We Do
          </span>
          <h2 className="font-serif text-4xl lg:text-6xl font-light mt-3 text-charcoal">
            Services
          </h2>
        </motion.div>

        <div className="space-y-0">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.1,
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="border-t border-charcoal/10 py-10 lg:py-14 grid grid-cols-12 gap-4 items-start group"
            >
              <span className="col-span-2 lg:col-span-1 font-serif text-bronze text-lg lg:text-xl font-light">
                {service.number}
              </span>
              <h3 className="col-span-10 lg:col-span-4 font-serif text-2xl lg:text-3xl font-light text-charcoal group-hover:text-bronze transition-colors duration-500">
                {service.title}
              </h3>
              <p className="col-span-12 lg:col-span-5 lg:col-start-7 text-charcoal/50 font-light leading-relaxed mt-2 lg:mt-0">
                {service.description}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-charcoal/10" />
        </div>
      </div>
    </section>
  );
}
