import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.youtube.com",
                pathname: "/vi/**",
            },
            {
                // Placeholder de stock para /primavera-running mientras llegan las fotos reales de Alterpoint.
                protocol: "https",
                hostname: "picsum.photos",
            },
        ],
    },
};

export default nextConfig;