export default function Footer() {
    return (
        <footer
            id="contact"
            className="bg-[#1A213E] text-white px-6 md:px-[6.5vw] py-8 flex flex-col gap-16"
        >
            {/* CTA */}
            <div className="flex flex-col items-center gap-10 text-center">
                <h2 className="text-[clamp(52px,10vw,140px)] font-black uppercase leading-[0.82] tracking-[-0.065em]">
                    Let&apos;s Build
                    <br />
                    Something That
                    <br />
                    <span className="text-[#FB532C]">Matters.</span>
                </h2>

                <a
                    href="mailto:hello@pyxarr.com"
                    className="flex items-center justify-between gap-16 border border-white/20 px-6 py-4 text-xs font-semibold uppercase tracking-widest text-[#FB532C] hover:border-[#FB532C] transition-colors duration-300"
                >
                    Start a project
                    <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-7 text-current"
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

                <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
                    Building products and experiences that work, ship, and last.
                </p>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs uppercase tracking-widest text-white/40">

                {/* Social links */}
                <div className="flex items-center gap-8">
                    {["Twitter", "Instagram", "LinkedIn"].map((social) => (
                        <a
                            key={social}
                            href="#"
                            className="hover:text-white transition-colors duration-200"
                        >
                            {social}
                        </a>
                    ))}
                </div>

                {/* Email */}
                <a
                    href="mailto:hello@pyxarr.com"
                    className="hover:text-white transition-colors duration-200"
                >
                    hello@pyxarr.com
                </a>

                {/* Legal */}
                <div className="flex items-center gap-8">
                    <span>Privacy</span>
                    <span>© Pyxarr 2024</span>
                </div>

            </div>
        </footer>
    );
}