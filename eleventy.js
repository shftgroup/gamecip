module.exports = function(eleventyConfig) {
  eleventyConfig.setLiquidOptions({
    ext: ".liquid",
    dynamicPartials: true,
    strict_filters: true,
    root: "_includes"
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    passthroughFileCopy: true,
    templateFormats: ["html", "md", "liquid"],
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid"
  };
};
