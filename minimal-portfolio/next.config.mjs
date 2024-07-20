import { withSentryConfig } from "@sentry/nextjs";
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withSentryConfig(nextConfig, {
  org: "banking-rr",
  project: "javascript-nextjs",

  silent: !process.env.CI,

  widenClientFileUpload: true,

  hideSourceMaps: true,

  disableLogger: true,

  automaticVercelMonitors: true,
});
