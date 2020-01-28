import {CAPTCHA_WEBSITE_KEY, HOSTNAME, REPO_NAME} from './customer.config.js';

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: REPO_NAME
  }
} : {};

const routes = [
  'references/reference/floriandanger',
  'references/reference/juleslamy',
  'references/reference/nicolelorenzmattke',
  'references/reference/jenswihsinger',
  'references/reference/gottsleben',
];

export default {
  mode: 'universal',
  ...routerBase,
  /*
  ** Headers of the page
  */
  generate: {
    ...routes
  },
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'de',
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        name: 'keywords',
        content: 'Finanzkompass, Finanzielle Freiheit, Bausparvertrag, Finanzen, FinanceFirst, Inflation, Haus, Beratung, Axel Beta, Finanzberater Eilbek, Vermögungsberater Eilbek, Eilbek Finanzberater, Eilbek Vermögungsberater, Aktien in Hamburg, Finanzberater in Karriere, Hamburg, Finanzen richtig einfach, finanzen, finanzielle Unabhängigkeit, Finanzielle Beratung Hamburg, Finanzberatung Hamburg, Finanzberater Hamburg, Unabhängiger Finanzberater für Hamburg, Unabhängiger Finanzberater in Hamburg, Finanzberater in Hamburg, Guter Finanzberater, Finanzprodukte, Finanzwissen, Unabhägiger Finanzberater, Ihre unabhängige Finanzberatung  '
      },
      {
        name: 'description',
        content: 'Dein persönlicher Finanzkompass in wenigen Schritten. Endlich eine einfache und zeitsparende Planung der Finanzen haben.'
      },
      {
        name: 'author',
        content: 'Axel Beta'
      },
      {
        name: 'language',
        content: 'German'
      }
    ],
    script: [
      {src: `https://www.google.com/recaptcha/api.js?render=${CAPTCHA_WEBSITE_KEY}`}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans&display=swap'},

    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~/plugins/vuelidate.js",
    {src: '~plugins/ga.js', mode: 'client'},
    '~/plugins/vue-lazysizes.client.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@bazzite/nuxt-optimized-images'
  ],
  robots: {
    Sitemap: `https://${HOSTNAME}/sitemap.xml`
  },
  sitemap: {
    hostname: `https://${HOSTNAME}`,
    gzip: true,
    routes: [
      'references/reference/floriandanger',
      'references/reference/juleslamy',
      'references/reference/nicolelorenzmattke',
      'references/reference/jenswihsinger',
      'references/reference/gottsleben'
    ]
  },
  optimizedImages: {
    inlineImageLimit: -1,
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 85
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8]
    },
    webp: {
      quality: 85
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, {isClient, loaders: {vue}}) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src'];
        vue.transformAssetUrls.source = ['data-srcset', 'srcset'];
      }
    }
  }
}
