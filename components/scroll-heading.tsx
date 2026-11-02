"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type Line = {
    text: string;
    className?: string;
    suffix?: string;
    suffixClassName?: string;
};

export default function ScrollHeading({
    lines,
    className = "",
}: {
    lines: Line[];
    className?: string;
}) {
    const reduceMotion = useReducedMotion();
    let index = 0;

    return (
        <motion.h2
            className={`flex flex-col ${className}`}
            aria-label={lines.map((line) => line.text + (line.suffix ?? "")).join(" ")}
            initial={reduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
        >
            {lines.map((line, lineIndex) => (
                <span
                    key={lineIndex}
                    className={`block overflow-hidden px-[0.1em] mx-[-0.1em] pb-[0.2em] mb-[-0.2em] ${line.className ?? ""}`}
                >
                    {line.text.split(" ").map((word, wordIndex, words) => {
                        const chars = [...word].map((char) => ({ char, className: "" }));

                        if (wordIndex === words.length - 1 && line.suffix) {
                            chars.push(
                                ...[...line.suffix].map((char) => ({
                                    char,
                                    className: line.suffixClassName ?? "",
                                })),
                            );
                        }

                        return (
                            <Fragment key={wordIndex}>
                                <span className="inline-block whitespace-nowrap">
                                    {chars.map(({ char, className: charClass }) => {
                                        const i = index++;

                                        return (
                                            <motion.span
                                                key={i}
                                                aria-hidden="true"
                                                className={`inline-block ${charClass}`}
                                                variants={{
                                                    hidden: { y: "130%" },
                                                    show: {
                                                        y: 0,
                                                        transition: {
                                                            duration: 0.5,
                                                            ease,
                                                            delay: i * 0.035,
                                                        },
                                                    },
                                                }}
                                            >
                                                {char}
                                            </motion.span>
                                        );
                                    })}
                                </span>
                                {wordIndex < words.length - 1 ? " " : null}
                            </Fragment>
                        );
                    })}
                </span>
            ))}
        </motion.h2>
    );
}
