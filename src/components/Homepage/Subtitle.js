import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
class Subtitle extends React.Component {
    render(){
        return(
            <div className="container section">
                <div className="subtitle-section">
                    <h2 className="wow fadeInUp" data-wow-duration="600" data-wow-delay="0.8s">
                    <FormattedMessage id="home.subtitle.title" />
                    </h2>
                    <p className="wow fadeInUp" data-wow-duration="600" data-wow-delay="0.8s">
                      <FormattedMessage id="home.subtitle.description" />
                    </p>
                </div>
            </div>
        )
    }
}

export default Subtitle