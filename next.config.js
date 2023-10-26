/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

module.exports = {
    async redirects() {
        return [
            {
                source: "/app-ads.txt",
                destination: "https://gametamin.com/app-ads.txt",
                permanent: true,
            },
        ];
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};