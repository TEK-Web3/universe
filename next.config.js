/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['card.godsunchained.com'],
    },
};

module.exports = nextConfig;
