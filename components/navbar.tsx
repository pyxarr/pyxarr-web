"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-20 pt-6 pb-4 md:pt-8 bg-[#1A213E] tracking-tighter">

            {/* Logo */}
            <Link href="/" aria-label="Go to homepage" className="inline-block">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0 }}
                    className="relative inline-block text-white font-bold text-2xl md:text-3xl tracking-tight uppercase leading-none"
                >
                    Pyxarr
                    <span className="absolute top-0.2 -right-4 md:-right-4.5 text-base md:text-[20px] leading-none text-[#FB532C]">©</span>
                </motion.span>
            </Link>

            {/* Status indicator — hidden on mobile */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="hidden md:flex items-center gap-2.5"
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                <span className="text-white/70 text-sm uppercase">
                    Open to projects
                </span>
            </motion.div>

            {/* CTA */}
            <Link
                href="#contact"
                className="flex items-center gap-2 text-[#FB532C] text-sm md:text-lg tracking-widest uppercase hover:text-white transition-colors duration-200"
            >
                Contact Us
                <motion.svg
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-3.5 md:h-4 w-6 md:w-8 text-current"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M1 12h20" />
                    <path d="M14 5l7 7-7 7" />
                </motion.svg>
            </Link>

        </nav>
    );
}