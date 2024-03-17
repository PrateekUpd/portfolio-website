/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'scontent.fixe3-1.fna.fbcdn.net'
            }
        ]
    }
};

export default nextConfig;
