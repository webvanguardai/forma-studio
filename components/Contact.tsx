"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-36 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <span className="text-sm tracking-[0.2em] uppercase text-charcoal/40 font-light">
          Get in Touch
        </span>
        <h2 className="font-serif text-4xl lg:text-6xl font-light mt-3 text-charcoal">
          Start a Project
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Form */}
        <motion.form
          action="https://formspree.io/f/xqabpnvw"
          method="POST"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8"
        >
          <div>
            <label
              htmlFor="name"
              className="text-xs tracking-[0.15em] uppercase text-charcoal/40 block mb-3"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border-b border-charcoal/15 bg-transparent py-3 text-charcoal font-light focus:outline-none focus:border-charcoal/40 transition-colors placeholder:text-charcoal/20"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-xs tracking-[0.15em] uppercase text-charcoal/40 block mb-3"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border-b border-charcoal/15 bg-transparent py-3 text-charcoal font-light focus:outline-none focus:border-charcoal/40 transition-colors placeholder:text-charcoal/20"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="project-type"
              className="text-xs tracking-[0.15em] uppercase text-charcoal/40 block mb-3"
            >
              Project Type
            </label>
            <select
              id="project-type"
              name="project-type"
              required
              className="w-full border-b border-charcoal/15 bg-transparent py-3 text-charcoal font-light focus:outline-none focus:border-charcoal/40 transition-colors appearance-none"
            >
              <option value="">Select a project type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Hospitality">Hospitality</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-xs tracking-[0.15em] uppercase text-charcoal/40 block mb-3"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full border-b border-charcoal/15 bg-transparent py-3 text-charcoal font-light focus:outline-none focus:border-charcoal/40 transition-colors resize-none placeholder:text-charcoal/20"
              placeholder="Tell us about your project..."
            />
          </div>
          <button
            type="submit"
            className="bg-charcoal text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-charcoal/90 transition-colors duration-300"
          >
            Send Inquiry
          </button>
        </motion.form>

        {/* Map + Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-10"
        >
          {/* Google Maps */}
          <div className="aspect-[4/3] w-full overflow-hidden bg-light-grey">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178787820498!2d55.27078!3d25.19720!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sDowntown%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Forma Studio location — Downtown Dubai"
            />
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <p className="text-charcoal/50 font-light">
              Downtown Dubai, UAE
            </p>
            <a
              href="https://wa.me/971XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-charcoal hover:text-bronze transition-colors duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="text-sm tracking-wide">WhatsApp Us</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
