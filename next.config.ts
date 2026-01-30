import { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "bn"], // Supported languages: English and Bangla
    defaultLocale: "en",   // Default language
  },
};
module.exports = {
  allowedDevOrigins: ['192.168.10.57'],
};
export default nextConfig;