import React from "react"
import "aos/dist/aos.css"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"

const Intro = () => {
  const intl = useIntl()
  return (
    <div className="intro-section section container">
      <div
        className="bg-circle card-img wow fadeInLeft"
        data-wow-duration="600"
        data-wow-delay="0.8s"
      >
        <div className="intro-icon">
          <img
            src="/images/home/fantom_logo.png"
            alt="fantom icon"
            className="card-img wow fadeInRight"
            data-wow-duration="600"
            data-wow-delay="0.8s"
          />
        </div>
      </div>
      <div
        className="intro-text  wow fadeInRight"
        data-wow-duration="600"
        data-wow-delay="0.8s"
      >
        <h2>
          <FormattedMessage id="home.intro.title" />
        </h2>
        <p>
          <FormattedMessage id="home.intro.description" />
        </p>
        <div className="intro-button">
          <a href="/about">
            <input
              type="submit"
              value={intl.formatMessage({
                id: `learnMore`,
              })}
              className="button"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Intro
