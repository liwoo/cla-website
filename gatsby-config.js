const path = require('path');

const currEnv = process.env.NODE_ENV;

require('dotenv').config({
  path: `.env${currEnv ? '.' + currEnv : ''}`,
});

module.exports = {
  siteMetadata: {
    title: 'strapi-typescript-tailwind-starter',
    banner: {
      title: 'New Frontier',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum unde ducimus ab delectus. Amet repudiandae assumenda, praesentium nihil harum aspernatur distinctio doloribus itaque quo sapiente commodi quam exercitationem debitis.',
      imageUrl:
        'https://images.unsplash.com/photo-1622598453695-4fbaf151aadc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
    },
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
      resolve: 'gatsby-plugin-typegen',
      options: {
        outputPath: './src/generated/gatsby-graphql.ts',
      },
    },
    {
      resolve: 'gatsby-source-sanity',
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
