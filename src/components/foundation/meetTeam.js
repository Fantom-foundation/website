import React from "react"
import { teamData } from "./Data"
import { FormattedMessage, injectIntl, useIntl } from "gatsby-plugin-intl"

class MeetTeam extends React.Component {
  render() {
    return (
      <div className="container section">
        {teamData.map((headingData, i) => {
          const { heading, discription } = headingData
          return (
            <div className="meet-team" key={i}>
              <h2
                className="wow fadeInUp"
                data-wow-duration="600"
                data-wow-delay={0 + "." + (parseInt(i) + parseInt(3)) + "s"}
              >
                <FormattedMessage id={`foundationPage.teamData.heading`} />
              </h2>
              <p
                className="wow fadeInUp"
                data-wow-duration="600"
                data-wow-delay={0 + "." + (parseInt(i) + parseInt(3)) + "s"}
              >
                <FormattedMessage id={`foundationPage.teamData.description`} />
              </p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default MeetTeam
