import React from "react"
import WOW from "wowjs"

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
                Fantom wallet
              </h1>
              <h4 className="wow fadeInUp" data-wow-duration="600">
                {toggle
                  ? "Your FTM, always with you."
                  : "Store, send, receive and stake your FTM."}
              </h4>
              {!toggle && (
                <div className="buttons-wrapper wow fadeInUp"  data-wow-duration="600">
                  <button className="button light-btn">Open Web Wallet</button>
                  <button className="button dark-btn">Download Wallet</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
