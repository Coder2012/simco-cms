import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";
import Media from "../components/media/Media";

import SettingsStyles from "../settings.module.scss";
import LayoutStyles from "../layout.module.scss";

const Developments = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const Projects = edges
    .filter(edge => edge.node.frontmatter.type === "project")
    .map(edge => (
      <Link key={edge.node.id} to={edge.node.frontmatter.path}>
        <Media
          image={edge.node.frontmatter.spotlight}
          title={edge.node.frontmatter.title}
        />
      </Link>
    ));

  return (
    <Layout background={SettingsStyles.developmentsBg}>
      <h2>Developments</h2>
      <p>Please see our most recent developments</p>
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
                fluid(maxWidth: 720) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
// allImageSharp(filter: {
//  fluid: {originalName: {regex: "/spotlight/"}}
// }) {
//   edges {
//     node {
//       id
//       fixed(width: 720) {
//           ...GatsbyImageSharpFixed
//       }
//     }
//   }
// }
