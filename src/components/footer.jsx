import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends React.Component {
  render() {
    let currentYear = new Date().getFullYear();
    return (
      <footer className="footer">
        <div className="container">
          <div className="content columns">
            <div className="column has-text-left">
              <ul className="footer-list is-marginless">
                <li className="footer-list-item">
                  &copy; {currentYear > 2020 ? "2020 - " + currentYear : currentYear } Lauren Ebidia
                </li>
              </ul>
            </div>
            <div className="column has-text-right">
              <span class="icon has-text-primary">
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </span>
              <span class="icon has-text-primary">
                <FontAwesomeIcon icon={['fab', 'facebook']} />
              </span>
              <span class="icon has-text-primary">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </span>
              <span class="icon has-text-primary">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </span>
              <span class="icon has-text-primary">
                <FontAwesomeIcon icon={['fab', 'github']} />
              </span>
              <span class="icon has-text-primary">
                <FontAwesomeIcon icon={['fab', 'medium']} />
              </span>
              <span class="icon has-text-primary">
                <FontAwesomeIcon icon={['fab', 'stack-overflow']} />
              </span>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
