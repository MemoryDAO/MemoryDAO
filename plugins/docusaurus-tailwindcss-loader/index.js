module.exports = function (context, options) {
  return {
    name: 'postcss-tailwindcss-loader',
    configurePostCss(postcssOptions) {
      // Appends new PostCSS plugin.
      postcssOptions.plugins.push(
        require('postcss-import'),
        require('tailwindcss'),
        require('postcss-nested'),
        require('autoprefixer'),
      )
      return postcssOptions
    },
  }
}
