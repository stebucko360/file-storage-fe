console.log("API_URL", process.env.NEXT_PUBLIC_API_URL);
console.log("API_PORT", process.env.NEXT_PUBLIC_API_PORT);

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }
    return config;
  },
  experimental: {
    esmExternals: true,
  },
};

module.exports = nextConfig;
