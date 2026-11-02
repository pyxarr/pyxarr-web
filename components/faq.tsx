"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollHeading from "@/components/scroll-heading";

const faqs = [
    {
        id: "item-1",
        question: "Who do you work with?",
        answer:
            "We work with founders, startups, and growing brands from early-stage businesses building their first digital presence to established companies that need a better one. Local and international.",
    },
    {
        id: "item-2",
        question: "What does Pyxarr actually do?",
        answer:
            "Two things. We build digital products and experiences for clients: websites, web apps, mobile apps, brand identity. And we build our own products under the same roof. Same standards either way.",
    },
    {
        id: "item-3",
        question: "How does a project start?",
        answer:
            "You reach out, we have a quick conversation to understand what you need, and we send a proposal with scope, timeline, and pricing. No fluff, no discovery fees.",
    },
    {
        id: "item-4",
        question: "How long does a project take?",
        answer:
            "Depends on scope. A website is typically 2 to 4 weeks. A full product build is 6 to 12 weeks. You get a clear timeline before anything starts.",
    },
    {
        id: "item-5",
        question: "Do you work with international clients?",
        answer:
            "Yes. We work remotely with clients across Africa, Europe, and beyond. Communication is async-first with scheduled check-ins as needed.",
    },
];

export default function FAQ() {
    return (
        <section
            id="faq"
            className="bg-[#1A213E] text-white px-6 md:px-[6.5vw] py-26"
        >
            {/* Heading */}
            <ScrollHeading
                className="text-[clamp(52px,8vw,108px)] font-black uppercase leading-[0.82] tracking-[-0.065em] text-center mb-16 md:mb-24"
                lines={[
                    { text: "Questions &" },
                    {
                        text: "Answers",
                        suffix: ".",
                        suffixClassName: "text-[#FB532C]",
                    },
                ]}
            />

            {/* Accordion */}
            <Accordion
                multiple={false}
                className="w-full max-w-4xl mx-auto flex flex-col"
            >
                {faqs.map((faq) => (
                    <AccordionItem
                        key={faq.id}
                        value={faq.id}
                        className="border-white/15 border-b-0 py-2"
                    >
                        <AccordionTrigger className="text-xs md:text-sm font-semibold uppercase tracking-widest text-white hover:text-[#FB532C] hover:no-underline transition-colors duration-200 py-6">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-white/55 leading-relaxed max-w-2xl pb-6">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}