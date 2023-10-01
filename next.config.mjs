const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    serverActions: true,
    /* serverComponentsExternalPackages: ["pino"], */
  },
};

export default nextConfig;
