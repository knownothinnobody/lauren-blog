import React from 'react'
import PropTypes from 'prop-types'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Header from './header'
import Footer from './footer'
import '../css/index.scss'

library.add(fab)

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main page-container">{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
