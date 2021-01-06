//const withCSS = require('@zeit/next-css')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  basePath: isProd ? '/tokoku' : '',
  trailingSlash: isProd ? true : false,
  images: {
    domains: ['localhost'],
  },
  //assetPrefix: isProd ? 'https://cdn.mydomain.com' : '',
  //assetPrefix: isProd ? 'http://localhost/blogapp-nextjs/out' : '',
}

//module.exports = withCSS({
  //cssLoaderOptions: {
    //url: false
  //}
//});