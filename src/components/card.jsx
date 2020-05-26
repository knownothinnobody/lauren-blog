import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"

import { createMarkup } from "../utils/markup"

function Card({ title, content, path, additionalClasses }) {
  return (
    <div className={"card " + additionalClasses}>
      <div className="card-image">
        <figure className="image">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <h2 className="title is-4">{title}</h2>
          </div>
        </div>

        <div
          className="content"
          dangerouslySetInnerHTML={createMarkup(content)}
        ></div>
      </div>
      <footer className="card-footer">
        <Link className="card-footer-item" to={path}>
          View
        </Link>
      </footer>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  additionalClasses: PropTypes.string,
}

export default Card