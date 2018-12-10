module.exports = {
  siteMetadata: {
    title: `simco-cms`
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: "assets"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/projects`,
        name: "projects"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/news`,
        name: "news"
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: 'assets',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              wrapperStyle: 'margin-left: 0 !important; margin-right: 0 !important;'
            },
          },
        ],
      },
    },
    `gatsby-plugin-netlify-cms`
  ]
};
