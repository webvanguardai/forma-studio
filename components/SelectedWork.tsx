"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    name: "The Loft on Al Wasl",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    span: "col-span-1 row-span-1 md:col-span-1 md:row-span-2",
    aspect: "aspect-[3/4]",
  },
  {
    name: "DIFC Private Office",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    span: "col-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    name: "Palm Penthouse",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    span: "col-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    name: "Marina Boutique Hotel",
    category: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    span: "col-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    name: "Business Bay Residence",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
    span: "col-span-1",
    aspect: "aspect-square",
  },
  {
    name: "Downtown Showroom",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    span: "col-span-1",
    aspect: "aspect-[3/4]",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 lg:py-36 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <span className="text-sm tracking-[0.2em] uppercase text-charcoal/40 font-light">
          Selected Work
        </span>
        <h2 className="font-serif text-4xl lg:text-6xl font-light mt-3 text-charcoal">
          Projects
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.1,
            }}
            viewport={{ once: true, margin: "-50px" }}
            className={`group relative overflow-hidden cursor-pointer ${project.span}`}
          >
            <div className={`relative ${project.aspect} overflow-hidden`}>
              <Image
                src={project.image}
                alt={`${project.name} — ${project.category} interior design project`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500 flex items-end p-6">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white/70 text-xs tracking-[0.15em] uppercase mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-white font-serif text-xl lg:text-2xl font-light">
                    {project.name}
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
