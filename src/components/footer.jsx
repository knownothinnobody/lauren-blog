import { Link } from "gatsby"
import React from "react"

class Footer extends React.Component {
  render() {
    let currentYear = new Date().getFullYear();
    return (
      <footer className="footer">
        <div className="container">
          <div className="content columns">
            <div className="column has-text-centered">
              <ul className="footer-list is-marginless">
                <li className="footer-list-item">
                  &copy; {currentYear > 2020 ? "2020 - " + currentYear : currentYear } Lauren Ebidia
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
