const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: [
      "./app/pages/*.js",
      "./app/pages/**/*.js",
      "./app/components/*.js",
      "./app/components/**/*.js",
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
