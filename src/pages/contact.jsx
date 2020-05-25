import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/index.scss"
import { createMarkup } from "../utils/markup"

function ContactPage() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/personal/"}}) {
          edges {
            node {
              frontmatter {
                contactTitle
                contactBody
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
      <SEO title="Contact" />
      <div className="container">
        <h1 className="main-title is-size-1">{frontmatter.contactTitle}</h1>
        <div dangerouslySetInnerHTML={createMarkup(frontmatter.contactBody)}></div>
      </div>
    </Layout>
  )
}

export default ContactPage