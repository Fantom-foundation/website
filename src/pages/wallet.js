import React from "react"

import Layout from "../components/layouts/layout"
import Wallet from "../components/Wallet/Index"

const WalletPage = props => {
  return (
    <Layout location={props.location}>
      <Wallet />
    </Layout>
  )
}

export default WalletPage
