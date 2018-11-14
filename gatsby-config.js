module.exports = {
    siteMetadata: {
        title: `simco-cms`,
    },
    plugins: [
        `gatsby-plugin-netlify-cms`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/projects`,
                name: "markdown-pages",
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/news`,
                name: "markdown-pages",
            },
        },
    ],
}
