import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { createMarkup } from "../utils/markup"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="container blog-post">
        <h1 className="main-title is-size-1 has-text-dark">
          {frontmatter.title}
        </h1>
        <h2 className="sub-title is-6 has-text-grey">
          {frontmatter.date} &#x00B7; {markdownRemark.timeToRead} min read
        </h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={createMarkup(html)}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
      fields {
        slug
      }
      timeToRead
      excerpt(pruneLength: 500)
      html
    }
  }
`
