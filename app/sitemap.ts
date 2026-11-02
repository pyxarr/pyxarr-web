import { MetadataRoute } from "next";
import { works } from "@/lib/works";

export default function sitemap(): MetadataRoute.Sitemap {
    const workPages = works.map((work) => ({
        url: `https://pyxarr.com/work/${work.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [
        {
            url: "https://pyxarr.com",
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 1,
        },
        ...workPages,
    ];
}