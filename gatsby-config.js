module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    author: 'Oluwole Oyekanmi',
    title: `Oluwole Oyekanmi - A Data Science blog by Oluwole Oyekanmi`,
    siteUrl: 'http://oluwole.co',
    defaultTitle: 'Oluwole Oyekanmi - A Data Science blog by Oluwole Oyekanmi',
    defaultDescription:
      'Oluwole Oyekanmi is a Data Scientist working at the intersection of finance and data',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-next',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    // 'gatsby-transformer-mdx',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false,
              maxWidth: 740,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-119756101-1',
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-fullstory`,
      options: {
        fs_org: 'KCX9J',
      },
    },
    {
      resolve: `gatsby-plugin-gosquared`,
      options: {
        token: 'GSN-735683-L',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
  ],
};
