const {DateTime} = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const readingTime = require("eleventy-plugin-reading-time");
const description = require("eleventy-plugin-description");
const markdownIt = require("markdown-it");

const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(readingTime);
  eleventyConfig.addPlugin(description);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);

  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addLayoutAlias("home", "layouts/homepage.njk");

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: "utc+1"}).toFormat(
      "dd-LL-yyyy"
    );
  });


  eleventyConfig.addFilter("categories", dateObj => {
    return dateObj.filter(item => {
      if (item != "posts") {
        return true;
      }
      return false;
    });
  });

  eleventyConfig.addCollection("tagList", require("./src/filters/getTagList"));


  eleventyConfig.addCollection("posts", function (collections) {
    const collection = collections.getFilteredByGlob("./src/posts/**/**/*.md");

    for (let i = 0; i < collection.length; i++) {
      const prevPost = collection[i - 1];
      const nextPost = collection[i + 1];

      collection[i].data["prevPost"] = prevPost;
      collection[i].data["nextPost"] = nextPost;
    }

    return collection;
  });


  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#"
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  return {
    templateFormats: ["md", "njk", "html", "liquid"],
    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about those.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.io/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`
    // pathPrefix: "/",

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",

    // These are all optional, defaults are shown:
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
