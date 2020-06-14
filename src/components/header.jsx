import { Link } from 'gatsby'
import React from 'react'

import image from '../images/logo.png'

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: 'is-not-active'
    }
  }

  toggleNavbar () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu
    const active =
      this.state.isOpen === 'is-not-active' ? 'is-active' : 'is-not-active'
    this.setState({
      isOpen: active
    })
    this.forceUpdate()
  }

  render () {
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item logo-image-holder" to="/">
              <img src={image} aria-hidden="true" alt="" />
              <span className="is-sr-only">Home</span>
            </Link>
            <a
              role="button"
              className={'navbar-burger burger ' + this.state.isOpen}
              aria-label="menu"
              aria-expanded="false"
              onClick={this.toggleNavbar}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={'navbar-menu ' + this.state.isOpen}>
            <div className="navbar-start">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item about-link" to="/about">
                About
              </Link>
              <Link className="navbar-item contact-link" to="contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
