const path = require("path")
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
  // if(node.frontmatter)
    // console.log(node.frontmatter)
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const projectTemplate = path.resolve(`src/templates/projectTemplate.js`)
  const newsTemplate = path.resolve(`src/templates/newsTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              type
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const template = node.frontmatter.type === 'project' ? projectTemplate : newsTemplate;

      createPage({
        path: node.frontmatter.path,
        component: template,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
