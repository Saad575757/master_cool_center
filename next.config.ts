import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Anchor Turbopack to this project. Without it, Turbopack walks up and
   * picks up the unrelated `package.json` that exists in the user home
   * directory, which makes it ignore the lockfile.
   */
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    /**
     * Next.js 16 restricts optimisation to these quality values.
     * Every <Image /> on this site uses the default (75).
     */
    qualities: [75],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
