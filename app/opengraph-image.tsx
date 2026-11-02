import { ImageResponse } from "next/og";

export const alt = "Pyxarr — Digital Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
                <div
                    style={{
                        fontSize: 28,
                        fontWeight: 700,
                        color: "white",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                    }}
                >
                    Pyxarr©
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div
                        style={{
                            fontSize: 96,
                            fontWeight: 900,
                            color: "white",
                            lineHeight: 0.85,
                            textTransform: "uppercase",
                            letterSpacing: "-0.04em",
                        }}
                    >
                        Digital
                        <br />
                        <span style={{ color: "#FB532C" }}>Studio.</span>
                    </div>
                </div>

                <div
                    style={{
                        fontSize: 18,
                        color: "rgba(255,255,255,0.4)",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                    }}
                >
                    Building products and experiences that work, ship, and last.
                </div>
            </div>
        ),
        size
    );
}