import React from "react"

import Layout from "../components/layouts/layout"
import RoadMapPage from "../components/Roadmap/"

const roadMap = (props) => {
    return (
        <Layout location={props.location}>
            <RoadMapPage />
        </Layout>
    )
}

export default roadMap