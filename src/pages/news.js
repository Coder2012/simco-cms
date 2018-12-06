import React from 'react'
import { graphql } from 'gatsby'
import PostLink from '../components/postLink'
import Layout from '../components/Layout'
import LayoutStyles from '../layout.module.scss'

const News = ({
    data: {
        allMarkdownRemark: { edges }
    }
}) => {
const Projects = edges
    .filter(edge => edge.node.frontmatter.type === 'news')
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

    return ( <Layout layoutType={LayoutStyles.layoutSpacer}>
        <h2>News</h2>
        {Projects}
    </Layout> );
}
 
export default News;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            type
          }
        }
      }
    }
  }
`