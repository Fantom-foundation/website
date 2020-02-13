import React from "react"
import { offerData } from "./Data"
import { FormattedMessage, injectIntl, useIntl } from "gatsby-plugin-intl"
const OffersSection = () => {
  const intl = useIntl()
  return (
    <div className="offers-section container section">
      <div className="offer">
        <h2
          className="wow fadeInUp"
          data-wow-duration="600"
          data-wow-delay="0.6s"
        >
          <FormattedMessage id="home.offers.title" />
        </h2>
        <p
          className="wow fadeInUp"
          data-wow-duration="600"
          data-wow-delay="0.8s"
        >
          <FormattedMessage id="home.offers.description" />
        </p>
      </div>
      <div className="offer-group">
        {offerData.map((offerCard, index) => {
          const { id, classname } = offerCard

          return (
            <div className={classname} key={id}>
              <div className="offer-text">
                <h4
                  className="wow fadeInUp"
                  data-wow-duration="6S00"
                  data-wow-delay={0 + "." + (parseInt(id) + parseInt(3)) + "s"}
                >
                  <FormattedMessage id={`home.offerdata.${index}.heading`} />
                </h4>
                <p
                  className="wow fadeInUp"
                  data-wow-duration="600"
                  data-wow-delay={0 + "." + (parseInt(id) + parseInt(3)) + "s"}
                >
                  <FormattedMessage id={`home.offerdata.${index}.des`} />
                </p>
              </div>
              <div className="offer-icon">
                <img
                  src={intl.formatMessage({
                    id: `home.offerdata.${index}.img`,
                  })}
                  alt={intl.formatMessage({
                    id: `home.offerdata.${index}.alt`,
                  })}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default OffersSection
