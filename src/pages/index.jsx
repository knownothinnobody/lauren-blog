import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import { createMarkup } from "../utils/markup"

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

  let featuredPost = edges.shift().node

  let rows = []
  let chunkSize = 3
  
  rows.push(
    edges.splice(0,edges.length % 3).map(({ node }) => {
      return (
        <div className="column">
          <Card
            additionalClasses="blog-post-card"
            title={node.frontmatter.title}
            path={node.frontmatter.path}
            key={"slug-" + node.frontmatter.path}
            content={node.excerpt}
          />
        </div>
      )
    })
  )

  for (let i=0, j=edges.length; i<j; i+=chunkSize) {
    rows.push(
      edges.slice(i,i+chunkSize).map(({ node }) => {
        return (
          <div className="column">
            <Card
              additionalClasses="blog-post-card"
              title={node.frontmatter.title}
              path={node.frontmatter.path}
              key={"slug-" + node.frontmatter.path}
              content={node.excerpt}
            />
          </div>
        )
      })
    )
  }

  rows = rows.map( row => {
    return (
      <div className="columns">
        {row}
      </div>
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
                  {featuredPost.frontmatter.title}
                </h1>
                <p dangerouslySetInnerHTML={createMarkup(featuredPost.excerpt)}></p>
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
        {rows}
      </div>
    </Layout>
  )
}

export default IndexPage
