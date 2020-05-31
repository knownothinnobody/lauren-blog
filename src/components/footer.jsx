import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/content/personal/" } }
        ) {
          edges {
            node {
              frontmatter {
                linkedinLink
                facebookLink
                twitterLink
                instagramLink
                githubLink
                mediumLink
                stackLink
              }
            }
          }
        }
      }
    `
  )

  const { edges } = data.allMarkdownRemark
  const { frontmatter } = edges[0].node

  const socialIcons = {
    linkedinLink: "linkedin",
    facebookLink: "facebook",
    twitterLink: "twitter",
    instagramLink: "instagram",
    githubLink: "github",
    mediumLink: "medium",
    stackLink: "stack-overflow",
  }

  const socialListIcons = Object.keys(socialIcons).map(socialLink => {
    if (frontmatter[socialLink]) {
      return (
        <span key={socialLink} className="icon">
          <a className="has-text-primary" href={frontmatter[socialLink]}>
            <FontAwesomeIcon icon={["fab", socialIcons[socialLink]]} />
          </a>
        </span>
      )
    } else {
      return null
    }
  })

  let currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="content columns">
          <div className="column has-text-left copyright-column">
            <ul className="footer-list is-marginless">
              <li className="footer-list-item">
                &copy;{" "}
                {currentYear > 2020 ? "2020 - " + currentYear : currentYear}{" "}
                Lauren Ebidia
              </li>
            </ul>
          </div>
          <div className="column has-text-right social-links-column">
            {socialListIcons}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
