import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import Media from '../components/media/Media'

const Developments = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const Projects = edges
    .filter(edge => edge.node.frontmatter.type === 'project')
    .map(edge => (
      <Link key={edge.node.id} to={edge.node.frontmatter.path}>
        <Media image={edge.node.frontmatter.spotlight}/>
        {edge.node.frontmatter.title} ({edge.node.frontmatter.date})
      </Link>
    ));

  return (
    <Layout>
      <h2>Developments</h2>
      {Projects}
    </Layout>
  );
};

export default Developments;

export const pageQuery = graphql`
query MyImageQuery {
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
              spotlight {
                childImageSharp {
                  fixed(width: 720) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
      allImageSharp(filter: {
       fluid: {originalName: {regex: "/spotlight/"}}
      }) {
        edges {
          node {
            id
            fixed(width: 720) {
                ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
`;
