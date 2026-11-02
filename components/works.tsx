import Link from "next/link";
import { works } from "@/lib/works";

export default function Works() {
  return (
    <section id="works" className="bg-[#1A213E] px-6 md:px-[6.5vw] py-16 border-t border-white/10">
      {/* Section heading */}
      <div className="mb-16 md:mb-20">
        <h2 className="text-[clamp(52px,8vw,108px)] font-black uppercase leading-[0.82] tracking-[-0.065em] text-white">
          Selected Works
          <span className="text-[#FB532C]">.</span>
        </h2>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
        {works.map((work) => (
          <Link
            key={work.slug}
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
        ))}
      </div>
    </section>
  );
}