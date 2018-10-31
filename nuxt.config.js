
module.exports = {
  serverMiddleware: [
    '~api/index.js'
  ],
  modules: [
    ['@nuxtjs/axios', {baseURL: '/api'}]
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'chandas-vr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Yatra+One'}
    ]
  },
  plugins: ['~/plugins/vuetify.js',
  { src: '~/plugins/vued3.js', ssr: false },
  { src: '~/plugins/vuepdf.js', ssr: false }
  ],
  css: [
    '~/assets/style/app.styl'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  loadingIndicator: {
    name: 'folding-cube',
    color: 'white',
    background: '#3B8070'
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      '~/plugins/vuetify.js',
      '~/plugins/vued3.js'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
