"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { works } from "@/lib/works";
import ScrollHeading from "@/components/scroll-heading";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Works() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="works" className="bg-[#1A213E] px-6 md:px-[6.5vw] py-16 pt-10 md:pt-16">
      {/* Section heading */}
      <div className="mb-16 md:mb-20">
        <ScrollHeading
          className="text-[clamp(52px,8vw,108px)] font-black uppercase leading-[0.82] tracking-[-0.065em] text-white"
          lines={[
            {
              text: "Selected Works",
              suffix: ".",
              suffixClassName: "text-[#FB532C]",
            },
          ]}
        />
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
        {works.map((work, index) => (
          <motion.div
            key={work.slug}
            initial={reduceMotion ? false : { opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease, delay: index * 0.08 }}
          >
            <Link
              href={`/work/${work.slug}`}
              className="group block"
            >
              {/* Image placeholder */}
              <div className="relative aspect-4/3 bg-white/5 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 text-black"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Project name and year */}
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-white">
                  {work.name}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
                  {work.year}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}