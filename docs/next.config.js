const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["tsx", "mdx", "md"],
};

module.exports = withMDX(nextConfig);
