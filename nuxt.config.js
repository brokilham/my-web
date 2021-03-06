module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'sikiliham zone',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
        // example vue-meta
      { hid: 'title', name: 'title', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/css/swiper.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,300italic,400italic' },
     
    ],
    script:[
      { src: 'https://use.fontawesome.com/releases/v5.1.0/js/all.js' },
      { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js' } ,
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js' } ,
      { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js' } 
      
    ]

  },
  /*
  ** Custom SCSS
  */
  css: [
    { 
      src: '~/assets/scss/_base.scss', lang: 'scss',
      src: '~/assets/scss/_mixins.scss', lang: 'scss',
      src: '~/assets/scss/_responsive.scss', lang: 'scss',
      src: '~/assets/scss/styles.scss', lang: 'scss',
     // src: '~/node_modules/github-calendar/dist/github-calendar.css', lang: 'css'
    }
  ],
  /*
  ** Custom Plugin
   */
  plugins: [
    { src: '~plugins/swiper.js', ssr: false }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
   extend (config, ctx) {
    if (ctx.isDev && ctx.client) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      })

      const vueLoader = config.module.rules.find(({loader}) => loader === 'vue-loader')
      const { options: {loaders} } = vueLoader || { options: {} }

      if (loaders) {
        for (const loader of Object.values(loaders)) {
          changeLoaderOptions(Array.isArray(loader) ? loader : [loader])
        }
      }
      config.module.rules.forEach(rule => changeLoaderOptions(rule.use))
      // console.log(util.inspect(config.module.rules, { depth: 6 }))

      function changeLoaderOptions (loaders) {
        if (loaders) {
          for (const loader of loaders) {
            if (loader.loader === 'sass-loader') {
              Object.assign(loader.options, {
                includePaths: ['./assets'],
                // data: '@import "_imports";'
              })
            }
          }
        }
      }
    }
   } 
  }
}

