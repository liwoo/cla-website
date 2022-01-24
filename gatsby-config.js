const path = require('path');

const currEnv = process.env.NODE_ENV;

require('dotenv').config({
  path: `.env${currEnv ? '.' + currEnv : ''}`,
});

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
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        codegen: true,
        fileName: `./src/generated/gatsby-graphql.ts`,
        documentPaths: [
          './src/**/*.{ts,tsx}',
          './node_modules/gatsby-*/**/*.js',
        ],
        failOnError: process.env.NODE_ENV === 'production',
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: process.env.SANITY_GRAPHQL_TAG,
        watchMode: process.env.SANITY_WATCH_MODE === 'true',
      },
    },
  ],
};
