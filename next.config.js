
// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const debug = process.env.NODE_ENV !== 'production'
const vercelProd = process.env.DEPLOY_ENV === 'vercel'

module.exports = {
  reactStrictMode: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/skills': { page: '/skills' }
    }
  },
  assetPrefix: (!debug && !vercelProd) ? '/tiny-notion-app/' : '',
  images: {
    loader: "imgix",
    path: (!vercelProd) ? 'https://tinywugaga.github.io/tiny-notion-app/' : '',
  }
}
