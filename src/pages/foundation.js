import React from "react"

import Layout from "../components/layouts/layout"
import Team from "../components/foundation/index"

const TeamMember = (props) => {
    const path = props.path;
    return (
        <Layout location={props.location}>
            <Team />
        </Layout>
    )
}

export default TeamMember