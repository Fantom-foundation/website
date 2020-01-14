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
    return (
      <div className="create-wallet">
        <div className="container">
          <div className="create-wallet-wrapper">
            <h2 className="dark title">Create your wallet</h2>
            <h4>Download the desktop version:</h4>
            <div className="os-icons">
              <h4>Mac OS</h4>
              <h4>Windows</h4>
            </div>
            <a href="#" className="wallet-link">
              Or open the Web wallet >
            </a>
            <h4>Looking for the mobile version instead?</h4>
            <h4 className="wallet-link">Click here for the mobile wallet</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateWallet
