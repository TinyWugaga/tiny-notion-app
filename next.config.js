   
// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  reactStrictMode: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/skills': { page: '/skills' }
    }
  },
  assetPrefix: !debug ? '/tiny-notion-tool/' : '',
  images: {
    loader: "imgix",
    path: "https://tinywugaga.github.io/tiny-notion-tool/",
},
}
