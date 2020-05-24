import { Link } from "gatsby"
import React from "react"

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer is-secondary">
        <div className="container">
          <div className="content columns">
            <div className="column has-text-left">
              <ul className="footer-list is-marginless">
                <li className="footer-list-item">
                  &copy; {new Date().getFullYear()} David Campbell
                </li>
              </ul>
            </div>
            <div className="column  has-text-centered">
              <ul className="footer-list is-marginless">
                <li className="footer-list-item footer-list-header">
                  Contact Us
                </li>
                <li className="footer-list-item">
                  <a href="mailto:info@example.com">info@example.com</a>
                </li>
                <li className="footer-list-item">+1.234.567.8910</li>
              </ul>
            </div>
            <div className="column has-text-right">
              <ul className="footer-list is-marginless">
                <li className="footer-list-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="footer-list-item">
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
