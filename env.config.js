const prod = process.env.NODE_ENV === 'production'
const vercelProd = process.env.DEPLOY_ENV === 'vercel'

module.exports = {
  'process.env.BACKEND_URL': (prod && !vercelProd) ? '/tiny-notion-app' : '',
}