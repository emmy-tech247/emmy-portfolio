/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // static build -> ./out (for Azure Static Web Apps)
  images: { unoptimized: true },
};
export default nextConfig;
