import React from "react"
import { Helmet } from "react-helmet"

import Header from "../SiteHeader/Header"
import ChineseHeader from "../SiteHeader/ChineseHeader"
import Footer from "../SiteFooter/Footer"
import ChineseFooter from "../SiteFooter/ChineseFooter"
import "./style/app.scss"

const Layout = ({ children, location }) => {
  console.log("location", location)
  let { currentPath } = location
  const { pathname } = location
  const pathPrefix = "/"
  currentPath = pathname.replace(pathPrefix, "").replace("/", "")
  let header = "",
    footer = ""
  if (currentPath.includes("cn")) {
    header = <ChineseHeader />
    footer = <ChineseFooter />
  } else {
    header = <Header />
    footer = <Footer />
  }
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fantom Foundation</title>
        {/* <link rel="canonical" href="" /> */}
      </Helmet>
      {header}
      <main>{children}</main>
      {footer}
    </div>
  )
}

export default Layout
