const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: 'https://cla.dartsmw.com',
    title: 'Christian Life Assembly',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'locales',
        path: path.resolve(__dirname, 'locales'),
      },
      __key: 'locales',
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        localeJsonSourceName: 'locales',
        languages: ['en', 'fr', 'de'],
        defaultLanguage: 'en',
        siteUrl: 'http://localhost:8000/',
        i18nextOptions: {
          keySeparator: false,
          nsSeparator: false,
          fallbackLng: 'en',
        },
        pages: [],
      },
    },
  ],
};
