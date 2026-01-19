/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/brightspirestudio',
    images: {
        unoptimized: true,
    },
    reactCompiler: true,
};

export default nextConfig;
