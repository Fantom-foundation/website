import React from "react"

import Layout from "../../components/layouts/layout"
import Team from "../../components/foundation/index"

const TeamMember = (props) => {
    return (
        <Layout location={props.location}>
            <Team />
        </Layout>
    )
}

export default TeamMember