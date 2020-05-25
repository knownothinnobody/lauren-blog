import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

function IndexPage() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/blog/"}}, sort: {order: ASC, fields: frontmatter___date}) {
          edges {
            node {
              frontmatter {
                path
                title
              }
              excerpt(format: HTML)
            }
          }
        }
      }
    `
  )

  let edges = data.allMarkdownRemark.edges

  let cards = edges.map(edge => {
    let post = edge.node
    return (
      <Card
        additionalClasses="blog-post-card"
        title={post.frontmatter.title}
        path={post.frontmatter.path}
        key={"slug-" + post.frontmatter.path}
        content={post.excerpt}
      />
    )
  })

  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero is-large is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h2 className="subtitle">
                  Featured Article
                </h2>
                <h1 className="title">
                  Primary bold title
                </h1>
              </div>
              <div className="column">
                <h2 className="subtitle">
                  Featured Article
                </h2>
                <h1 className="title">
                  Primary bold title
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <h1 className="main-title is-size-1">Recent Posts</h1>
        {cards}
      </div>
    </Layout>
  )
}

export default IndexPage
