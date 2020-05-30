import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { createMarkup } from "../utils/markup"

function ContactPage() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/content/personal/" } }
        ) {
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

  const handleFormValidation = () => {
    const nameInput = document.getElementById("name-input")
    const emailInput = document.getElementById("email-input")
    const messageInput = document.getElementById("message-input")

    const emailRegex = new RegExp(
      "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
    )

    if (nameInput.getAttribute("dirty")) {
      if (nameInput.value) {
        nameInput.classList.add("is-success")
        nameInput.classList.remove("is-danger")
      } else {
        nameInput.classList.add("is-danger")
        nameInput.classList.remove("is-success")
      }
    } else {
      nameInput.classList.remove("is-danger")
      nameInput.classList.remove("is-success")
    }

    if (emailInput.getAttribute("dirty")) {
      if (emailRegex.test(emailInput.value)) {
        emailInput.classList.add("is-success")
        emailInput.classList.remove("is-danger")
      } else {
        emailInput.classList.add("is-danger")
        emailInput.classList.remove("is-success")
      }
    } else {
      emailInput.classList.remove("is-danger")
      emailInput.classList.remove("is-success")
    }
    if (messageInput.getAttribute("dirty")) {
      if (messageInput.value) {
        messageInput.classList.add("is-success")
        messageInput.classList.remove("is-danger")
      } else {
        messageInput.classList.add("is-danger")
        messageInput.classList.remove("is-success")
      }
    } else {
      messageInput.classList.remove("is-danger")
      messageInput.classList.remove("is-success")
    }
  }

  const handleFormClear = e => {
    e.preventDefault()
    const form = document.getElementById("contact-form")
    const inputs = [].slice.call(form.getElementsByClassName("input"))

    form.reset()
    inputs.forEach(element => {
      element.removeAttribute("dirty")
    })
  }

  const handleInputDirty = e => {
    e.target.setAttribute("dirty", "true")
  }

  const { edges } = data.allMarkdownRemark
  const { frontmatter } = edges[0].node

  return (
    <Layout>
      <SEO title="Contact" />
      <div className="container">
        <h1 className="main-title is-size-1">{frontmatter.contactTitle}</h1>
        <div className="columns">
          <div className="column">
            <div
              dangerouslySetInnerHTML={createMarkup(frontmatter.contactBody)}
            ></div>
          </div>
          <div className="column">
            <form
              id="contact-form"
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onChange={handleFormValidation}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p class="is-hidden">
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
              </p>
              <div className="field">
                <label for="name-input" className="label">
                  Name
                </label>
                <div className="control">
                  <input
                    id="name-input"
                    className="input"
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleInputDirty}
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label for="email-input" className="label">
                  Email
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    id="email-input"
                    name="email"
                    placeholder="Email"
                    onChange={handleInputDirty}
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label for="message-input" className="label">
                  Message
                </label>
                <div className="control">
                  <textarea
                    className="textarea input"
                    id="message-input"
                    placeholder="Message"
                    name="message"
                    onChange={handleInputDirty}
                    required
                  ></textarea>
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <input
                    type="submit"
                    className="button is-primary"
                    value="Submit"
                  />
                </div>
                <div className="control">
                  <button
                    className="button is-primary is-light"
                    onClick={handleFormClear}
                  >
                    Cancel
                  </button>
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
