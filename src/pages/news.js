import React from "react";
import { graphql, Link } from "gatsby";
import PostLink from "../components/postLink";
import Layout from "../components/Layout";
import LayoutStyles from "../layout.module.scss";
import SettingsStyles from "../settings.module.scss";
import NewsMedia from "../components/media/newsMedia";

const News = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const Projects = edges
    .filter(edge => edge.node.frontmatter.type === "news")
    .map(edge => (
      <Link key={edge.node.id} to={edge.node.frontmatter.path}>
        <NewsMedia key={edge.node.id} data={edge.node.frontmatter} />
      </Link>
    ));

  return (
    <Layout
      background={SettingsStyles.developmentsBg}
      layoutType={LayoutStyles.layoutSpacer}
    >
      <h2>News</h2>
      {Projects}
    </Layout>
  );
};

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
            summary
            image {
              childImageSharp {
                fixed(width: 160, height: 160) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
