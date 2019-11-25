import React from "react"

import Layout from "../components/layouts/layout"
import DeveloperPage from "../components/DeveloperPage/index"

const Developer = (props) => {
    return (
        <Layout location={props.location}>
            <DeveloperPage />
        </Layout>
    )
}

export default Developer
