const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'directus-4profi.onrender.com',
        pathname: '/assets/**',
      },
    ],
  },
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'directus-4profi.onrender.com',
      pathname: '/assets/**',
    },
  ],
}
};

module.exports = nextConfig;
