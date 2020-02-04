import React from "react"
import Hero from "./Hero"
import CreateWallet from "./CreateWallet"
import HalfImgContent from "./HalfImgContent"

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
          <span>Mobile</span>
          <span>Desktop</span>
        </div>
      </div>
      <Hero toggle={toggle} />
      <HalfImgContent toggle={toggle} />
      <CreateWallet toggle={toggle} setToggle={setToggleHandler} />
    </div>
  )
}

export default Wallet
