import React from "react"
import WOW from "wowjs"

class HalfImgContent extends React.Component {
  componentDidMount() {
    const wow = new WOW.WOW({
      offset: 100,
    })
    wow.init()
  }
  render() {
    const { toggle } = this.props
    const data = toggle ? mobileData : desktopData
    return (
      <div className="half-image-section">
        {data.map(section => {
          const { id, imgUrl, title, content } = section
          return (
            <div className="half-image-wrapper" key={id}>
              <div className="half-img-content">
                <div className="section-img">
                  <img className="half-image" src={imgUrl} alt={title} />
                </div>
                <div className="half-image-content">
                  <div className="content">
                    <h2
                      className="wow fadeInUp"
                      data-wow-duration="600"
                      data-wow-delay="0.8"
                    >
                      {title}
                    </h2>
                    <h4
                      className="wow fadeInUp"
                      data-wow-duration="600"
                      data-wow-delay="0.8"
                    >
                      {content}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default HalfImgContent

const desktopData = [
  {
    id: `d1`,
    imgUrl: `/images/wallet/1.png`,
    title: `Safe, secure`,
    content: `Access your wallet with an encrypted keystore file.`,
  },
  {
    id: `d2`,
    imgUrl: `/images/wallet/2.png`,
    title: `Easy to use`,
    content: `Sending crypto should be simple. We got you.`,
  },
  {
    id: `d3`,
    imgUrl: `/images/wallet/3.png`,
    title: `Rewarding`,
    content: `Let your FTM work for you. Stake your FTM to secure the network and get rewarded in return.`,
  },
]

const mobileData = [
  {
    id: `m1`,
    imgUrl: `/images/wallet/phone-2.png`,
    title: `Secure and \nanonymous`,
    content: `Your private key is safely stored on your phone and never shared. `,
  },
  {
    id: `m2`,
    imgUrl: `/images/wallet/phone-3.png`,
    title: `Send and receive FTM`,
    content: `Yes, it’s as easy as it looks.`,
  },
  {
    id: `m3`,
    imgUrl: `/images/wallet/phone-4.png`,
    title: `Stake on the go`,
    content: `Stake your FTM from your phone, check and claim your rewards.`,
  },
]
