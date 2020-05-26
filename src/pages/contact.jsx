import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
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
        <div className="columns">
          <div className="column">
            <div dangerouslySetInnerHTML={createMarkup(frontmatter.contactBody)}></div>
          </div>
          <div className="column">
            <form action="">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Text input" />
                </div>
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input className="input" type="email" placeholder="Email input" />
                </div>
              </div>

              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea className="textarea" placeholder="Message"></textarea>
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-link">Submit</button>
                </div>
                <div className="control">
                  <button className="button is-link is-light">Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage