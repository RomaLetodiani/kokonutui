import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    outputFileTracingIncludes: {
        "/**": ["components/kokonutui/**/*", "components/ui/block-*.tsx"],
    },
    async headers() {
        return [
            {
                source: "/r/:path*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                hostname: "*",
            },
        ],
    },
};

export default nextConfig;
