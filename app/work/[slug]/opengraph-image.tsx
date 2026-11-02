import { ImageResponse } from "next/og";
import { works } from "@/lib/works";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage({ params }: { params: { slug: string } }) {
    const work = works.find((w) => w.slug === params.slug);
    const name = work?.name ?? "Work";
    const category = work?.category ?? "";

    return new ImageResponse(
        (
            <div
                style={{
                    background: "#1A213E",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "80px",
                }}
            >
                <div style={{ display: "flex" }}>
                    <div
                        style={{
                            fontSize: 18,
                            color: "rgba(255,255,255,0.4)",
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                        }}
                    >
                        Pyxarr — Selected Work
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            fontSize: 96,
                            fontWeight: 900,
                            color: "white",
                            lineHeight: 0.85,
                            textTransform: "uppercase",
                            letterSpacing: "-0.04em",
                        }}
                    >
                        <span>
                            {name}
                            <span style={{ color: "#FB532C" }}>.</span>
                        </span>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            fontSize: 20,
                            color: "rgba(255,255,255,0.4)",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            marginTop: 16,
                        }}
                    >
                        {category}
                    </div>
                </div>

                <div style={{ display: "flex" }}>
                    <div
                        style={{
                            fontSize: 18,
                            color: "rgba(255,255,255,0.4)",
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                        }}
                    >
                        pyxarr.com
                    </div>
                </div>
            </div>
        ),
        size
    );
}