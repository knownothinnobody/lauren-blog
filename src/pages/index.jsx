import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

function IndexPage() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
                title
              }
              html
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
        content={post.html}
      />
    )
  })

  return (
    <Layout>
      <SEO title="Home" />
      <section class="hero is-large is-primary is-bold">
        <div class="hero-body">
          <div class="container">
            <div className="columns">
              <div className="column">
                <h2 class="subtitle">
                  Featured Article
                </h2>
                <h1 class="title">
                  Primary bold title
                </h1>
              </div>
              <div className="column">
                <h2 class="subtitle">
                  Featured Article
                </h2>
                <h1 class="title">
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
