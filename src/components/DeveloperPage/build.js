import React from "react"
import { buildData } from "./Data"
import { FormattedMessage, injectIntl, useIntl } from "gatsby-plugin-intl"
const Build = () => {
  const intl = useIntl()
  return (
    <div className="container section">
      {buildData.map((buildcontent, i) => {
        const { heading, discription, href, img } = buildcontent
        return (
          <div className="build" key={i}>
            <div className="build-section-text">
              <h2 className="wow fadeInUp" data-wow-duration="600">
                <FormattedMessage id={`developerPage.buildData.heading`} />
              </h2>
              <p className="wow fadeInUp" data-wow-duration="600">
                <FormattedMessage id={`developerPage.buildData.description`} />
              </p>
              <a
                href={intl.formatMessage({
                  id: `developerPage.buildData.href`,
                })}
                target="_blank"
                className="wow fadeInUp"
                data-wow-duration="600"
                rel="noopener noreferrer"
              >
                <input
                  type="submit"
                  value={intl.formatMessage({
                    id: `developerPage.buildData.getstarted`,
                  })}
                  className="button"
                />
              </a>
            </div>
            <div
              className="build-section-img wow fadeInUp"
              data-wow-duration="600"
            >
              <div className="build-block wow fadeInUp" data-wow-duration="600">
                <img
                  src={img}
                  alt="github wow fadeInUp"
                  data-wow-duration="600"
                />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Build
