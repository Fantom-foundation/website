import React from "react"
import WOW from "wowjs"
import { FormattedMessage, injectIntl, useIntl } from "gatsby-plugin-intl"

const HalfImgContent = ({ toggle }) => {
  const intl = useIntl()
  React.useEffect(() => {
    const wow = new WOW.WOW({
      offset: 100,
    })
    wow.init()
  })

  const data = toggle ? mobileData : desktopData
  return (
    <div className="half-image-section">
      {toggle
        ? data.map((section, index) => {
            const { id, imgUrl, title, content } = section
            return (
              <div className="half-image-wrapper" key={id}>
                <div className="half-img-content">
                  <div className="section-img">
                    <img
                      className="half-image"
                      // src={imgUrl}
                      src={intl.formatMessage({
                        id: `walletPage.mobileData.${index}.imgUrl`,
                      })}
                      alt={intl.formatMessage({
                        id: `walletPage.mobileData.${index}.title`,
                      })}
                    />
                  </div>
                  <div className="half-image-content">
                    <div className="content">
                      <h2
                        className="wow fadeInUp"
                        data-wow-duration="600"
                        data-wow-delay="0.8"
                      >
                        <FormattedMessage
                          id={`walletPage.mobileData.${index}.title`}
                        />
                      </h2>
                      <h4
                        className="wow fadeInUp"
                        data-wow-duration="600"
                        data-wow-delay="0.8"
                      >
                        <FormattedMessage
                          id={`walletPage.mobileData.${index}.content`}
                        />
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        : data.map((section, index) => {
            const { id, imgUrl, title, content } = section
            return (
              <div className="half-image-wrapper" key={id}>
                <div className="half-img-content">
                  <div className="section-img">
                    <img
                      className="half-image"
                      // src={imgUrl}
                      src={intl.formatMessage({
                        id: `walletPage.desktopData.${index}.imgUrl`,
                      })}
                      alt={intl.formatMessage({
                        id: `walletPage.desktopData.${index}.title`,
                      })}
                    />
                  </div>
                  <div className="half-image-content">
                    <div className="content">
                      <h2
                        className="wow fadeInUp"
                        data-wow-duration="600"
                        data-wow-delay="0.8"
                      >
                        <FormattedMessage
                          id={`walletPage.desktopData.${index}.title`}
                        />
                      </h2>
                      <h4
                        className="wow fadeInUp"
                        data-wow-duration="600"
                        data-wow-delay="0.8"
                      >
                        <FormattedMessage
                          id={`walletPage.desktopData.${index}.content`}
                        />
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

export default HalfImgContent

const desktopData = [
  {
    id: `d1`,
    imgUrl: `/images/wallet/desktop1.png`,
    title: `Safe, secure`,
    content: `Access your wallet with an encrypted keystore file.`,
  },
  {
    id: `d2`,
    imgUrl: `/images/wallet/desktop2.png`,
    title: `Easy to use`,
    content: `Sending crypto should be simple. We got you.`,
  },
  {
    id: `d3`,
    imgUrl: `/images/wallet/desktop3.png`,
    title: `Rewarding`,
    content: `Let your FTM work for you. Stake your FTM to secure the network and get rewarded in return.`,
  },
]

const mobileData = [
  {
    id: `m1`,
    imgUrl: `/images/wallet/phone1.png`,
    title: `Secure and \nanonymous`,
    content: `Your private key is safely stored on your phone and never shared. `,
  },
  {
    id: `m2`,
    imgUrl: `/images/wallet/phone2.png`,
    title: `Send and receive FTM`,
    content: `Yes, it’s as easy as it looks.`,
  },
  {
    id: `m3`,
    imgUrl: `/images/wallet/phone3.png`,
    title: `Stake on the go`,
    content: `Stake your FTM from your phone, check and claim your rewards.`,
  },
]
