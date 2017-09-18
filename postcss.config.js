const autoprefixer = require('autoprefixer')
const postcssImport = require('postcss-import')
const postcssUrl = require('postcss-url')

module.exports = (ctx) => ({
  plugins: [
    postcssImport(),
    postcssUrl(),
    autoprefixer({
      browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 10', 'Android>=4']
    })
  ]
})
