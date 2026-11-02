"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const services = ["Design", "Development", "Strategy", "Products"];

const pyxarrOrder = [2, 3, 4, 5, 1, 0];
const studioOrder = [2, 3, 4, 5, 1, 0];

const letterTransition = {
    duration: 0.4,
    ease: [0.22, 1, 0.36, 1] as const,
};

interface SprayProps {
    pyxarrRect: DOMRect | null;
    studioRect: DOMRect | null;
    containerRect: DOMRect | null;
}

function SprayStreak({ pyxarrRect, studioRect, containerRect }: SprayProps) {
    const controls = useAnimationControls();

    useEffect(() => {
        if (!pyxarrRect || !studioRect || !containerRect) return;

        const loop = async () => {
            while (true) {
                // Reset to hidden
                await controls.set({ clipPath: "inset(0 100% 0 0)", opacity: 1 });
                // Wipe in
                await controls.start({
                    clipPath: "inset(0 0% 0 0)",
                    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
                });
                // Hold
                await new Promise((r) => setTimeout(r, 1800));
                // Fade out
                await controls.start({
                    opacity: 0,
                    transition: { duration: 0.6, ease: "easeInOut" },
                });
                // Pause before next loop
                await new Promise((r) => setTimeout(r, 600));
            }
        };

        // Start after letter animations settle
        const timer = setTimeout(loop, 600);
        return () => clearTimeout(timer);
    }, [pyxarrRect, studioRect, containerRect, controls]);

    if (!pyxarrRect || !studioRect || !containerRect) return null;

    const px = {
        left: pyxarrRect.left - containerRect.left,
        right: pyxarrRect.right - containerRect.left,
        mid: pyxarrRect.top - containerRect.top + pyxarrRect.height * 0.45,
    };

    const st = {
        left: studioRect.left - containerRect.left,
        right: studioRect.right - containerRect.left,
        mid: studioRect.top - containerRect.top + studioRect.height * 0.45,
    };

    const W = containerRect.width;
    const H = containerRect.height;

    return (
        <motion.div
            className="absolute inset-0 w-full h-full"
            animate={controls}
            initial={{ clipPath: "inset(0 100% 0 0)", opacity: 1 }}
        >
            <svg
                aria-hidden="true"
                className="absolute inset-0 w-full h-full"
                viewBox={`0 0 ${W} ${H}`}
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter id="spray" x="-20%" y="-20%" width="140%" height="140%">
                        <feTurbulence type="turbulence" baseFrequency="0.65" numOctaves="4" seed="8" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                </defs>

                <g filter="url(#spray)">
                    {/* PYXARR streak */}
                    <path
                        d={`M ${px.left - 10} ${px.mid - 20} Q ${px.left + (px.right - px.left) * 0.3} ${px.mid - 40} ${px.left + (px.right - px.left) * 0.6} ${px.mid} Q ${px.left + (px.right - px.left) * 0.8} ${px.mid + 20} ${px.right + 20} ${px.mid - 10}`}
                        stroke="#FB532C"
                        strokeWidth={pyxarrRect.height * 0.12}
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.35"
                    />
                    <path
                        d={`M ${px.left} ${px.mid + 10} Q ${px.left + (px.right - px.left) * 0.3} ${px.mid - 20} ${px.left + (px.right - px.left) * 0.6} ${px.mid + 15} Q ${px.left + (px.right - px.left) * 0.8} ${px.mid + 30} ${px.right + 20} ${px.mid + 5}`}
                        stroke="#FB532C"
                        strokeWidth={pyxarrRect.height * 0.04}
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.25"
                    />

                    {/* PYXARR splatter dots */}
                    <circle cx={px.left + (px.right - px.left) * 0.15} cy={px.mid - 35} r={pyxarrRect.height * 0.02} fill="#FB532C" opacity="0.3" />
                    <circle cx={px.left + (px.right - px.left) * 0.18} cy={px.mid - 52} r={pyxarrRect.height * 0.01} fill="#FB532C" opacity="0.2" />
                    <circle cx={px.left + (px.right - px.left) * 0.55} cy={px.mid - 25} r={pyxarrRect.height * 0.025} fill="#FB532C" opacity="0.25" />
                    <circle cx={px.left + (px.right - px.left) * 0.75} cy={px.mid + 35} r={pyxarrRect.height * 0.015} fill="#FB532C" opacity="0.2" />

                    {/* STUDIO streak */}
                    <path
                        d={`M ${st.left - 10} ${st.mid - 15} Q ${st.left + (st.right - st.left) * 0.3} ${st.mid - 35} ${st.left + (st.right - st.left) * 0.6} ${st.mid + 10} Q ${st.left + (st.right - st.left) * 0.8} ${st.mid + 25} ${st.right + 20} ${st.mid}`}
                        stroke="#FB532C"
                        strokeWidth={studioRect.height * 0.1}
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.35"
                    />
                    <path
                        d={`M ${st.left} ${st.mid + 15} Q ${st.left + (st.right - st.left) * 0.35} ${st.mid - 10} ${st.left + (st.right - st.left) * 0.6} ${st.mid + 20} Q ${st.left + (st.right - st.left) * 0.8} ${st.mid + 38} ${st.right + 20} ${st.mid + 12}`}
                        stroke="#FB532C"
                        strokeWidth={studioRect.height * 0.035}
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.25"
                    />

                    {/* STUDIO splatter dots */}
                    <circle cx={st.left + (st.right - st.left) * 0.12} cy={st.mid - 30} r={studioRect.height * 0.018} fill="#FB532C" opacity="0.3" />
                    <circle cx={st.left + (st.right - st.left) * 0.15} cy={st.mid - 48} r={studioRect.height * 0.01} fill="#FB532C" opacity="0.2" />
                    <circle cx={st.left + (st.right - st.left) * 0.55} cy={st.mid + 30} r={studioRect.height * 0.02} fill="#FB532C" opacity="0.25" />
                    <circle cx={st.left + (st.right - st.left) * 0.78} cy={st.mid - 20} r={studioRect.height * 0.012} fill="#FB532C" opacity="0.2" />
                </g>
            </svg>
        </motion.div>
    );
}

export default function Hero() {
    const pyxarrRef = useRef<HTMLHeadingElement>(null);
    const studioRef = useRef<HTMLHeadingElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const [pyxarrRect, setPyxarrRect] = useState<DOMRect | null>(null);
    const [studioRect, setStudioRect] = useState<DOMRect | null>(null);
    const [containerRect, setContainerRect] = useState<DOMRect | null>(null);

    useEffect(() => {
        const measure = () => {
            if (pyxarrRef.current && studioRef.current && containerRef.current) {
                setPyxarrRect(pyxarrRef.current.getBoundingClientRect());
                setStudioRect(studioRef.current.getBoundingClientRect());
                setContainerRect(containerRef.current.getBoundingClientRect());
            }
        };

        const timer = setTimeout(measure, 500);
        const observer = new ResizeObserver(measure);
        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, []);

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
            <div ref={containerRef} className="relative flex flex-col flex-1">

                {/* Spray overlay */}
                <div className="absolute inset-0 pointer-events-none z-10">
                    <SprayStreak
                        pyxarrRect={pyxarrRect}
                        studioRect={studioRect}
                        containerRect={containerRect}
                    />
                </div>

                {/* PYXARR row */}
                <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] items-end gap-6 mt-8 md:mt-16">

                    <div className="@container overflow-hidden pb-[0.15em] mb-[-0.15em] mx-[-0.1em] px-[0.1em]">
                        <h1
                            ref={pyxarrRef}
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

                    <motion.div
                        className="hidden lg:flex flex-col pb-2 md:pl-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.55, ease: "easeOut" }}
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

                    <motion.div
                        className="col-span-12 lg:col-span-4 lg:pt-3 order-2 lg:order-1 mt-6 lg:mt-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1.35, ease: "easeOut" }}
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
                            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4 sm:h-5 sm:w-5">
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

                    <div className="col-span-12 lg:col-span-8 order-1 lg:order-2">
                        <div className="overflow-hidden px-[0.1em] mx-[-0.1em]">
                            <h2
                                ref={studioRef}
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