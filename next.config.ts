import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import createMDX from "@next/mdx";

const withNextIntl = createNextIntlPlugin();

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

const nextConfig: NextConfig = {
  // Configure pageExtensions to support MDX
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  /* config options here */
};
export default withNextIntl(withMDX(nextConfig));
