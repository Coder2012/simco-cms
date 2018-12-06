import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import LayoutStyles from '../layout.module.scss'
import ProjectStyles from './project.module.scss'
import SettingsStyles from '../settings.module.scss'
import Img from 'gatsby-image'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  console.log(frontmatter.image)
  return (
    <Layout layoutType={LayoutStyles.layoutSpacer} background={SettingsStyles.developmentsBg}>
      <Img fluid={frontmatter.image.childImageSharp.fluid} className={ProjectStyles.hero} />
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`