import React from "react"
import WOW from "wowjs"
import { FormattedMessage, injectIntl, useIntl } from "gatsby-plugin-intl"

class CreateWallet extends React.Component {
  componentDidMount() {
    const wow = new WOW.WOW({
      offset: 100,
    })
    wow.init()
  }
  render() {
    const { toggle, setToggle } = this.props
    return (
      <div className="create-wallet">
        <div className="container">
          <div className="create-wallet-wrapper">
            <h2
              className="dark title wow fadeInUp"
              data-wow-duration="600"
              data-wow-delay="0.8"
            >
              {toggle ? (
                <FormattedMessage
                  id={`walletPage.createWallet.desktopContent`}
                />
              ) : (
                <FormattedMessage
                  id={`walletPage.createWallet.mobileContent`}
                />
              )}
            </h2>
            {!toggle && (
              <h4
                className="wow fadeInUp"
                data-wow-duration="600"
                data-wow-delay="0.8"
              >
                <FormattedMessage
                  id={`walletPage.createWallet.downloadButton`}
                />
              </h4>
            )}
            {toggle ? (
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
                  href="https://play.google.com/store/apps/details?id=com.fantomwallet"
                  className="google-icon"
                  target="_blank"
                >
                  <img src="/images/wallet/google-play.png" alt="Google Play" />
                </a>
              </div>
            ) : (
              <div
                className="os-icons wow fadeInUp"
                data-wow-duration="600"
                data-wow-delay="0.8"
              >
                <a
                  href="https://github.com/Fantom-foundation/desktop-web-wallet/releases"
                  target="_blank"
                  className="icon-wrapper"
                >
                  <img src="/images/wallet/apple.svg" alt="Mac OS" />
                  <h4>
                    <FormattedMessage id={`walletPage.createWallet.macText`} />
                  </h4>
                </a>
                <a
                  href="https://github.com/Fantom-foundation/desktop-web-wallet/releases"
                  target="_blank"
                  className="icon-wrapper"
                >
                  <img src="/images/wallet/windows.svg" alt="Windows" />
                  <h4>
                    <FormattedMessage
                      id={`walletPage.createWallet.windowsText`}
                    />
                  </h4>
                </a>
              </div>
            )}
            {!toggle && (
              <a
                href="https://wallet.fantom.network/#/"
                target="_blank"
                className="wallet-link wow fadeInUp"
                data-wow-duration="600"
                data-wow-delay="0.8"
              >
                <FormattedMessage
                  id={`walletPage.createWallet.openWalletText`}
                />
              </a>
            )}
            <h4
              className="wow fadeInUp"
              data-wow-duration="600"
              data-wow-delay="0.8"
            >
              {toggle ? (
                <FormattedMessage
                  id={`walletPage.createWallet.lastSectionTextDesktop`}
                />
              ) : (
                <FormattedMessage
                  id={`walletPage.createWallet.lastSectionTextMobile`}
                />
              )}
            </h4>
            <h4
              className="wallet-link wow fadeInUp"
              data-wow-duration="600"
              data-wow-delay="0.8"
              onClick={() => setToggle()}
            >
              {toggle ? (
                <FormattedMessage
                  id={`walletPage.createWallet.lastSectionLinkDesktop`}
                />
              ) : (
                <FormattedMessage
                  id={`walletPage.createWallet.lastSectionLinkMobile`}
                />
              )}
            </h4>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateWallet
