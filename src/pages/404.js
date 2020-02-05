import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import Layout from "../components/layouts/layout"


const NotFoundPage = (props) => (
  <Layout location={props.location}>
    <div className="container">
      <div className="not-found-warpper text-center">
        <h1><FormattedMessage id="notfound.header" /></h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <a href="/" className="btn">
          Back to Home
        </a>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage