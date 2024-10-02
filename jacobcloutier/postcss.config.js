const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: [
    "./app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/Layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/misc/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/contact/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/platform/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,css}",
    ],
    whitelistPatterns: [/^slick-/],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];
module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
