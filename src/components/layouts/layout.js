import React from "react"
import Header from "../SiteHeader/Header"
import Footer from "../SiteFooter/Footer"
import "./style/app.scss"

const Layout = ({children, location}) => {
  return(
    <div>
      <Header location={location}/>
        <main>{children}</main>
      <Footer/>
    </div>
  )
}

  export default Layout