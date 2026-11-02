import React from "react";

const services = ["Branding", "UI/UX", "Web Design", "Strategy"];

export default function Hero() {
    return (
        <section className="min-h-screen bg-[#1A213E] text-white pt-12 flex flex-col overflow-hidden px-4 sm:px-6 md:px-22">

            {/* Services navigation */}
            <div className="grid w-full grid-cols-7 items-center py-3">

                {services.map((service, index) => (
                    <React.Fragment key={service}>
                        <span className="w-full text-center text-xs md:text-lg font-medium uppercase tracking-tight">
                            {service}
                        </span>

                        {index < services.length - 1 && (
                            <span className="flex w-full justify-center">
                                <span className="h-1 w-1 rounded-full bg-[#FB532C]" />
                            </span>
                        )}
                    </React.Fragment>
                ))}

            </div>

            {/* Main typography */}
            <div className="flex flex-col flex-1">

                {/* PYXARR row */}
                <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr] items-end gap-6 mt-16">

                    <h1 className="text-[clamp(75px,19vw,300px)] font-black leading-[0.78] tracking-[-0.085em] uppercase whitespace-nowrap">
                        Pyxarr
                    </h1>

                    {/* Tagline */}
                    <div className="flex flex-col pb-2 md:pl-4">
                        <p className="text-sm md:text-base font-semibold uppercase leading-relaxed">
                            Crafting digital clarity
                        </p>

                        <p className="text-sm md:text-base font-semibold uppercase leading-relaxed text-[#FB532C]">
                            Results-driven
                        </p>
                    </div>

                </div>

                {/* STUDIO + DESCRIPTION */}
                <div className="grid grid-cols-12 gap-6 mt-16 items-start">

                    {/* Description */}
                    <div className="col-span-12 lg:col-span-4 lg:pt-3 lg:order-1">

                        <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold leading-tight tracking-tight">
                            Pyxarr Studio is a creative digital studio focused on building high-impact digital products and experiences.
                        </h3>

                        <p className="text-sm md:text-base text-white/50 leading-relaxed mt-6">
                            We partner with startups, founders, and growing brands to create thoughtful digital experiences combining design, development, and strategy to turn ideas into products that work.
                        </p>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-3 mt-8 text-[#FB532C] text-xs font-semibold uppercase tracking-widest hover:text-white transition-colors duration-300"
                        >
                            Start a project
                            <span className="text-lg">→</span>
                        </a>

                    </div>

                    {/* STUDIO typography */}
                    <div className="col-span-12 lg:col-span-8 lg:order-2">
                        <h2 className="text-[clamp(75px,17vw,245px)] font-black leading-[0.8] tracking-[-0.085em] uppercase whitespace-nowrap">
                            Studio
                        </h2>
                    </div>

                </div>

            </div>

            {/* Footer
            <div className="border-t border-white/15 py-6 mt-20 flex justify-between items-center">
                <span className="text-white/40 text-xs uppercase tracking-widest">
                    Est. 2024
                </span>

                <span className="text-white/40 text-xs uppercase tracking-widest">
                    Nigeria — Worldwide
                </span>
            </div> */}

        </section>
    );
}
