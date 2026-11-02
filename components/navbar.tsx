
export default function Navbar() {
    return (
        <nav className="right-0 z-50 flex items-center justify-between px-20 pt-8 bg-[#1A213E] tracking-tighter">

            {/* Logo */}
            <span className="relative inline-block text-white font-bold text-3xl tracking-tight uppercase leading-none">
                Pyxarr
                <span className="absolute top-0.7 -right-4.5 text-[20px] leading-none text-[#FB532C]">©</span>
            </span>

            {/* Status indicator */}
            <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                <span className="text-white/70 text-sm uppercase">
                    Open to projects
                </span>
            </div>

            {/* CTA */}
            <a
                href="#contact"
                className="flex items-center gap-2 text-[#FB532C] text-lg tracking-widest uppercase hover:text-white transition-colors duration-200"
            >
                Contact Us
                <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-8 text-current"
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
        </nav>
    );
}
