import { MetadataRoute } from "next";
import { works } from "@/lib/works";

const BASE_URL = "https://pyxarr-web.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
    const workPages = works.map((work) => ({
        url: `${BASE_URL}/work/${work.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 1,
        },
        ...workPages,
    ];
}