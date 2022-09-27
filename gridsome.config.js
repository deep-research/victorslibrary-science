require('dotenv').config()

module.exports = {
  siteName: 'Liquid Crystal Membrane',
  siteDescription: 'Scientific research on liquid crystal membranes and other related topics.',
  siteUrl: 'https://liquidcrystalmembrane.com',
  chainWebpack: config => {
    config
      .plugin('env')
      .use(require.resolve('webpack/lib/EnvironmentPlugin'), ['API_KEY'])
  },
  plugins: [
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     path: 'articles/**/*.md',
    //     typeName: 'Article',
    //     resolveAbsolutePaths: true,
    //     remark: {
    //       externalLinksTarget: '_blank',
    //       externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
    //     },
    //   },
    // },
    {
      use: '@gridsome/vue-remark',
      options: {
        baseDir: './articles',
        typeName: 'Article',
        template: './src/templates/Article.vue',
        pathPrefix: '/articles/',
        // route: '/articles/:author/:path',
        resolveAbsolutePaths: true,
        refs: {
          category: {
            typeName: 'Category',
            create: true
            // route: '/categories/:title'
          },
          tags: {
            typeName: 'Tag',
            create: true
            // route: '/tags/:title'
          }
        },
        plugins: [
          [ "remark-toc", { 
            heading: "contents" ,
            tight: true,
            ordered: true
          }],
        ],
        remark: {
          config: {
            footnotes: true
          }
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-193697648-2'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  templates: {
    Category: '/articles/categories/:title',
    Tag: '/articles/tags/:title'
  },
  css: {
    loaderOptions: {
      scss: {
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080
  }
}
