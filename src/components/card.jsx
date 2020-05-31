import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

import { createMarkup } from '../utils/markup'

function Card ({
  title,
  content,
  path,
  posterImage,
  date,
  readingTime,
  additionalClasses
}) {
  return (
    <div className={'card ' + additionalClasses}>
      <div className="card-image">
        <figure className="image card-image-wrapper">
          <img src={posterImage} alt="" aria-hidden="true" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <h2 className="title is-4 card-media-title">{title}</h2>
            <h3 className="title is-6 has-text-grey-darker">
              {date} &#x00B7; {readingTime} min read
            </h3>
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
  posterImage: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readingTime: PropTypes.number.isRequired
}

export default Card
