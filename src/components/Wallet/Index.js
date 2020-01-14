import React from "react"
import Hero from "./Hero"
import CreateWallet from "./CreateWallet"

const Wallet = () => {
  // show mobile data for toggle true
  const [toggle, setToggle] = React.useState(false)

  return (
    <div className="wallet">
      <div
        className={`wallet-toggle ${toggle ? "toggle" : ""}`}
        onClick={() => setToggle(!toggle)}
      >
        <div className="toggle-wrapper">
          <span>Mobile</span>
          <span>Desktop</span>
        </div>
      </div>
      <Hero toggle={toggle} />
      <CreateWallet />
    </div>
  )
}

export default Wallet
