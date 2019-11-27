import React from "react"
import { Helmet } from "react-helmet"

import Header from "../SiteHeader/Header"
import Footer from "../SiteFooter/Footer"
import "./style/app.scss"

const Layout = ({ children, location }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fantom Global</title>
        {/* <link rel="canonical" href="" /> */}
      </Helmet>
      <Header location={location} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout