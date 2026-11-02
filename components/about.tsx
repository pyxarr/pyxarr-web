
export default function About() {
    return (
        <section className="w-full bg-[#1A213E] text-white px-4 sm:px-6 md:px-22 py-24 flex flex-col gap-20">

            {/* Main statement */}
            <p className="text-[clamp(28px,4.5vw,64px)] font-black leading-[1.1] tracking-tight max-w-[85%]">
                Pyxarr is a digital studio that builds products, ships experiences,
                and solves real problems.{" "}
                <span className="text-[#FB532C]">
                    For the brands we partner with and the world we&apos;re building toward.
                </span>
            </p>

            {/* Supporting content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">

                {/* Left column */}
                <div className="flex flex-col gap-2">
                    <p className="text-white font-black text-xl md:text-2xl leading-tight tracking-tight uppercase">
                        Building products.
                        <br />
                        Solving problems.
                    </p>
                </div>

                {/* Right column */}
                <div className="flex flex-col gap-8 md:items-end md:justify-self-end">

                    <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md md:text-right">
                        We work with founders, startups, and growing brands to design and
                        build digital products that are fast, focused, and built to last.
                        We don&apos;t just deliver. We think alongside you, from the first
                        idea to the final product.
                    </p>

                    {/* CTA */}
                    <a
                        href="#contact"
                        aria-label="Start a project"
                        className="self-start md:self-end flex items-center justify-between gap-12 border border-white/20 px-6 py-4 text-xs font-semibold uppercase tracking-widest text-[#FB532C] transition-all duration-300 hover:border-[#FB532C] hover:bg-[#FB532C] hover:text-[#1A213E]"
                    >
                        <span>Start a project</span>

                        <svg
                            viewBox="0 0 24 24"
                            className="h-3.5 w-7 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M1 12h20" />
                            <path d="M14 5l7 7-7 7" />
                        </svg>
                    </a>

                </div>
            </div>
        </section>
    );
}
