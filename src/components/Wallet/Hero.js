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
    const { toggle } = this.props
    return (
      <div className="hero-section wallet-hero">
        <div className="container">
          <div className="hero-content">
            <div className="content">
              <h1 className="wow fadeInUp" data-wow-duration="600">
                <FormattedMessage id={`walletPage.hero.title`} />
              </h1>
              <h4 className="wow fadeInUp" data-wow-duration="600">
                {toggle ? (
                  <FormattedMessage id={`walletPage.hero.desktopContent`} />
                ) : (
                  <FormattedMessage id={`walletPage.hero.mobileContent`} />
                )}
              </h4>
              {!toggle ? (
                <div
                  className="buttons-wrapper wow fadeInUp"
                  data-wow-duration="600"
                >
                  <a
                    href="https://wallet.fantom.network/#/"
                    target="_blank"
                    className="button light-btn"
                  >
                    <FormattedMessage id={`walletPage.hero.firstButtonTitle`} />
                  </a>
                  <a
                    href="https://github.com/Fantom-foundation/desktop-web-wallet/releases"
                    target="_blank"
                    className="button dark-btn"
                  >
                    <FormattedMessage
                      id={`walletPage.hero.secondButtonTitle`}
                    />
                  </a>
                </div>
              ) : (
                <div
                  className="buttons-wrapper wow fadeInUp"
                  data-wow-duration="600"
                >
                  <a
                    href="https://apps.apple.com/us/app/fantom-wallet/id1436694080"
                    className="apple-icon"
                    target="_blank"
                  >
                    <img src="/images/wallet/app-store.png" alt="Apple Store" />
                  </a>
                  <a
                    className="google-icon"
                    href="https://play.google.com/store/apps/details?id=com.fantomwallet"
                    target="_blank"
                  >
                    <img
                      src="/images/wallet/google-play.png"
                      alt="Google Play"
                    />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        {!toggle ? (
          <img
            className="hero-img "
            src="/images/wallet/hero.png"
            alt="Web Wallet"
          />
        ) : (
          <img
            className="hero-img "
            src="/images/wallet/phone.png"
            alt="Mobile Wallet"
          />
        )}
      </div>
    )
  }
}

export default Hero
