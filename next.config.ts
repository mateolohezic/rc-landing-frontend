import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Fiesta de Halloween 2026 terminada: las páginas del evento llevan a la home.
    // /halloween/votacion/admin queda abierta para ver el resultado de la votación.
    async redirects() {
        return [
            { source: "/halloween", destination: "/", permanent: false },
            { source: "/halloween/gracias", destination: "/", permanent: false },
            { source: "/halloween/votacion", destination: "/", permanent: false },
        ];
    },
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