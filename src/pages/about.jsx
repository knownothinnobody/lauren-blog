import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/index.scss"
import { createMarkup } from "../utils/markup"

function AboutPage() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/personal/"}}) {
          edges {
            node {
              frontmatter {
                aboutTitle
                aboutBody
              }
            }
          }
        }
      }
    `
  )

  const { edges } = data.allMarkdownRemark;
  const { frontmatter } = edges[0].node;

  return (
    <Layout>
      <SEO title="About" />
      <div className="container">
        <h1 className="main-title is-size-1">{frontmatter.aboutTitle}</h1>
        <div dangerouslySetInnerHTML={createMarkup(frontmatter.aboutBody)}></div>
      </div>
    </Layout>
  )
}

export default AboutPage