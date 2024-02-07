/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static-1318552943.cos.ap-singapore.myqcloud.com",
        port: "",
        pathname: "/macro/**",
      },
    ],
  },
};

module.exports = nextConfig;
