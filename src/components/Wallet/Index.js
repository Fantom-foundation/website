import React from "react"
import Hero from "./Hero"
import CreateWallet from "./CreateWallet"
import HalfImgContent from "./HalfImgContent"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"

const Wallet = () => {
  // show mobile data for toggle true
  const [toggle, setToggle] = React.useState(false)
  const setToggleHandler = () => {
    setToggle(!toggle)
  }
  return (
    <div className={`wallet ${toggle ? "mobile" : ""}`}>
      <div
        className={`wallet-toggle ${toggle ? "toggle" : ""}`}
        onClick={() => setToggle(!toggle)}
      >
        <div className="toggle-wrapper">
          <span>
            <FormattedMessage id="walletPage.toggleButtonMobile" />
          </span>
          <span>
            <FormattedMessage id="walletPage.toggleButtonDesktop" />
          </span>
        </div>
      </div>
      <Hero toggle={toggle} />
      <HalfImgContent toggle={toggle} />
      <CreateWallet toggle={toggle} setToggle={setToggleHandler} />
    </div>
  )
}

export default Wallet
