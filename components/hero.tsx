"use client";

import React from "react";
import { motion } from "framer-motion";

const services = ["Design", "Development", "Strategy", "Products"];

const pyxarrOrder = [2, 3, 4, 5, 1, 0];
const studioOrder = [2, 3, 4, 5, 1, 0];

const letterTransition = {
    duration: 0.4,
    ease: [0.22, 1, 0.36, 1] as const,
};

export default function Hero() {
    return (
        <section className="lg:min-h-screen bg-[#1A213E] text-white pt-24 flex flex-col overflow-hidden px-4 sm:px-6 md:px-22">

            {/* Services navigation */}
            <motion.div
                className="grid w-full grid-cols-7 items-center gap-x-1 sm:gap-x-2 py-3"
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                    duration: 0.3,
                    delay: 1.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                {services.map((service, index) => (
                    <React.Fragment key={service}>
                        <span className="block w-full text-center text-[8px] sm:text-[10px] md:text-lg font-medium uppercase tracking-tight leading-none whitespace-nowrap">
                            {service}
                        </span>

                        {index < services.length - 1 && (
                            <span className="flex w-full items-center justify-center">
                                <span className="block h-1.5 w-1.5 rounded-full bg-[#FB532C]" />
                            </span>
                        )}
                    </React.Fragment>
                ))}
            </motion.div>

            {/* Main typography */}
            <div className="flex flex-col flex-1">

                {/* PYXARR row */}
                <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] items-end gap-6 mt-8 md:mt-16">

                    {/* PYXARR */}
                    <div className="@container overflow-hidden pb-[0.15em] mb-[-0.15em] mx-[-0.1em] px-[0.1em]">
                        <h1
                            aria-label="Pyxarr"
                            className="text-[clamp(75px,min(19vw,26cqw),300px)] font-black leading-[0.78] tracking-[-0.085em] uppercase whitespace-nowrap"
                        >
                            {"Pyxarr".split("").map((letter, index) => (
                                <motion.span
                                    key={index}
                                    aria-hidden="true"
                                    className="inline-block"
                                    initial={{ y: "130%" }}
                                    animate={{ y: 0 }}
                                    transition={{
                                        ...letterTransition,
                                        delay: 0.05 + pyxarrOrder.indexOf(index) * 0.045,
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </h1>
                    </div>

                    {/* Tagline — hidden on mobile */}
                    <motion.div
                        className="hidden lg:flex flex-col pb-2 md:pl-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.3,
                            delay: 0.55,
                            ease: "easeOut",
                        }}
                    >
                        <p className="text-sm md:text-base font-semibold uppercase leading-relaxed">
                            Crafting digital clarity
                        </p>
                        <p className="text-sm md:text-base font-semibold uppercase leading-relaxed text-[#FB532C]">
                            Results-driven
                        </p>
                    </motion.div>

                </div>

                {/* STUDIO + DESCRIPTION */}
                <div className="grid grid-cols-12 gap-6 mt-4 md:mt-16 items-start">

                    {/* Description */}
                    <motion.div
                        className="col-span-12 lg:col-span-4 lg:pt-3 order-2 lg:order-1 mt-6 lg:mt-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.3,
                            delay: 1.35,
                            ease: "easeOut",
                        }}
                    >
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
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 20 20"
                                fill="none"
                                className="h-4 w-4 sm:h-5 sm:w-5"
                            >
                                <path
                                    d="M4.75 10h10.5M10.5 5.25 15.25 10l-4.75 4.75"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                    </motion.div>

                    {/* STUDIO typography */}
                    <div className="col-span-12 lg:col-span-8 order-1 lg:order-2">
                        <div className="overflow-hidden px-[0.1em] mx-[-0.1em]">
                            <h2
                                aria-label="Studio"
                                className="text-[clamp(75px,17vw,245px)] font-black leading-[0.8] tracking-[-0.085em] uppercase whitespace-nowrap"
                            >
                                {"Studio".split("").map((letter, index) => (
                                    <motion.span
                                        key={index}
                                        aria-hidden="true"
                                        className="inline-block"
                                        initial={{ y: "-130%" }}
                                        animate={{ y: 0 }}
                                        transition={{
                                            ...letterTransition,
                                            delay: 0.85 + studioOrder.indexOf(index) * 0.045,
                                        }}
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </h2>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}