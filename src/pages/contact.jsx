import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/index.scss"

function ContactPage() {

  return (
    <Layout>
      <SEO title="Contact" />
      <div className="container">
        <h1 className="main-title is-size-1">Contact</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi quod voluptates sapiente quos fugit obcaecati vero porro dolor, sint impedit quaerat officiis id reprehenderit, dicta nam consequatur mollitia aut. Suscipit.</p>
      </div>
    </Layout>
  )
}

export default ContactPage