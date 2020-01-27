import React from "react"

import Layout from "../../components/layouts/layout"
import Policy from "../../components/privacyPolicy/index"

const PrivayPolicy = (props) => {
    return (
        <Layout location={props.location}>
            <Policy />
        </Layout>
    )
}

export default PrivayPolicy