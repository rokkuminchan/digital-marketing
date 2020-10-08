const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/haiyenhaiyen/Documents/Project/digital-marketing/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/haiyenhaiyen/Documents/Project/digital-marketing/src/pages/404.js"))),
  "component---src-pages-about-us-js": hot(preferDefault(require("/Users/haiyenhaiyen/Documents/Project/digital-marketing/src/pages/about-us.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/haiyenhaiyen/Documents/Project/digital-marketing/src/pages/index.js")))
}

