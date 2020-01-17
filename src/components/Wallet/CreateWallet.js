import React from "react"
import WOW from "wowjs"

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
              {toggle ? `Get the Fantom wallet app` : `Create your wallet`}
            </h2>
            {!toggle && (
              <h4
                className="wow fadeInUp"
                data-wow-duration="600"
                data-wow-delay="0.8"
              >
                Download the desktop version:
              </h4>
            )}
            {toggle ? (
              <div className="appicons"></div>
            ) : (
              <div
                className="os-icons wow fadeInUp"
                data-wow-duration="600"
                data-wow-delay="0.8"
              >
                <h4>Mac OS</h4>
                <h4>Windows</h4>
              </div>
            )}
            {!toggle && (
              <a
                href="#"
                className="wallet-link wow fadeInUp"
                data-wow-duration="600"
                data-wow-delay="0.8"
              >
                Or open the Web wallet >
              </a>
            )}
            <h4
              className="wow fadeInUp"
              data-wow-duration="600"
              data-wow-delay="0.8"
            >
              {toggle
                ? `Looking for the web and desktop versions instead?`
                : `Looking for the mobile version instead?`}
            </h4>
            <h4
              className="wallet-link wow fadeInUp"
              data-wow-duration="600"
              data-wow-delay="0.8"
              onClick={() => setToggle()}
            >
              {toggle
                ? `Click here for the web and desktop wallets`
                : `Click here for the mobile wallet`}
            </h4>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateWallet
