import React from "react"

import Layout from "../../components/layouts/layout"
import HomePage from "../../components/Homepage/Chinese/index"

const IndexPage = props => (
  <Layout location={props.location}>
    <HomePage />
  </Layout>
)

export default IndexPage
