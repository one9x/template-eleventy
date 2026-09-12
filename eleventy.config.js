export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/style.css');
  return {
    dir: { input: 'src', includes: '_includes', output: '_site' },
  };
}

// pathPrefix is left at '/'. On a One9x site you are at the root of your own
// subdomain; a pathPrefix left over from a GitHub Pages project repo produces a
// site whose every internal link is one level too deep.
