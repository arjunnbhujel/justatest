const withMDX = require("@next/mdx")()

// /** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  basePath: "/justatest",
  output: "export",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
}

module.exports = withMDX(nextConfig)
