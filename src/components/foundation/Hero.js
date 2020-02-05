import React from "react"
import WOW from "wowjs"
import { FormattedMessage, injectIntl, useIntl } from "gatsby-plugin-intl"

class Hero extends React.Component {
  componentDidMount() {
    const wow = new WOW.WOW({
      offset: 100,
    })
    wow.init()
  }
  render() {
    return (
      <div className="hero-section">
        <div className="container">
          <h1 className="wow fadeInUp" data-wow-duration="600">
            <FormattedMessage id={`foundationPage.hero.title`} />
          </h1>
        </div>
      </div>
    )
  }
}

export default Hero
