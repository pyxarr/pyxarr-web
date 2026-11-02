import Image from "next/image";

const services = [
    {
        number: "001",
        title: "Web Design & Development",
        description:
            "We design and build websites that are fast, focused, and built to convert. From strategy to launch, every detail is crafted to turn visitors into customers.",
        capabilities: [
            "Landing Pages & Marketing Sites",
            "E-commerce Stores",
            "Responsive Web Development",
        ],
        image: "/images/services/web-development.jpg",
        alt: "Web design and development",
    },
    {
        number: "002",
        title: "Product Development",
        description:
            "We take ideas from concept to shipped product. Web apps, mobile apps, dashboards built with clean architecture and the right stack for the problem.",
        capabilities: [
            "Web & Mobile Applications",
            "MVP Development",
            "Product Strategy & Architecture",
        ],
        image: "/images/services/product-development.jpg",
        alt: "Product development and engineering",
    },
    {
        number: "003",
        title: "Brand & Strategy",
        description:
            "We help brands show up with clarity and intention. From naming and positioning to visual identity and messaging, we build the foundation everything else sits on.",
        capabilities: [
            "Brand Identity & Visual Systems",
            "Positioning & Messaging",
            "Content & Communication Strategy",
        ],
        image: "/images/services/brand-strategy.jpg",
        alt: "Brand identity and strategy",
    },
];

export default function Services() {
    return (
        <section
            id="services"
            className="bg-[#1A213E] text-white px-6 md:px-[6.5vw] pt-10"
        >

            {/* Section heading */}
            <div className="mb-10 md:mb-20">
                <h2 className="text-[clamp(52px,8vw,108px)] font-black uppercase leading-[0.82] tracking-[-0.065em]">
                    Studio
                    <br />
                    Services
                    <span className="text-[#FB532C]">.</span>
                </h2>
            </div>

            {/* Services list */}
            <div className="flex flex-col">
                {services.map((service, index) => (
                    <article
                        key={service.number}
                        className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-10 md:py-8 ${index !== services.length - 1
                            ? "border-b border-white/10"
                            : ""
                            }`}
                    >

                        {/* Number */}
                        <div className="md:col-span-2">
                            <span className="text-lg md:text-xl font-medium tracking-tight">
                                <span className="text-[#FB532C]">
                                    {service.number}
                                </span>
                            </span>
                        </div>

                        {/* Service information */}
                        <div className="md:col-span-5 flex flex-col items-start">

                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-5">
                                {service.title}
                            </h3>

                            <p className="text-sm text-white/55 leading-relaxed max-w-md mb-8">
                                {service.description}
                            </p>

                            {/* Capabilities */}
                            <ul className="flex flex-col gap-4">
                                {service.capabilities.map((capability) => (
                                    <li
                                        key={capability}
                                        className="text-[11px] md:text-xs font-semibold uppercase tracking-wide flex items-center gap-3"
                                    >
                                        <span className="h-1 w-1 rounded-full bg-[#FB532C]" />
                                        {capability}
                                    </li>
                                ))}
                            </ul>

                        </div>

                        {/* Service image */}
                        <div className="md:col-span-5">
                            <div className="aspect-1.5/1 overflow-hidden bg-white/5">
                                <Image
                                    src={service.image}
                                    alt={service.alt}
                                    width={1200}
                                    height={800}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                        </div>

                    </article>
                ))}
            </div>

        </section>
    );
}
