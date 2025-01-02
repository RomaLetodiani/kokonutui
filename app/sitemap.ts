import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const currentDate = new Date();

    return [
        {
            url: "https://kokonutui.com",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: "https://kokonutui.com/docs",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: "https://kokonutui.com/docs/components/ai-input",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://kokonutui.com/docs/components/button",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://kokonutui.com/docs/components/card",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://kokonutui.com/docs/components/pricing",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://kokonutui.com/docs/components/text",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://kokonutui.com/docs/components/alert",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://kokonutui.com/docs/components/block",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://kokonutui.com/docs/components/input",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://kokonutui.com/docs/hooks/",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://kokonutui.com/docs/components/block",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: "https://kokonutui.com/docs/components/input",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: "https://kokonutui.com/docs/components/faq",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: "https://kokonutui.com/docs/components/list",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.6,
        },
    ];
}
