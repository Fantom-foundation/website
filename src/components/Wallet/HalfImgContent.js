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
		const data = toggle ? mobileData : desktopData;
		return (
			<div className="half-image-section">
				{data.map(section => {
					const { id, imgUrl, title, content } = section;
					return (
						<div className="half-image-wrapper" key={id}>
							<div className="half-img-content">
								<div className="section-img">
									<img className="half-image" src={imgUrl} alt={title} />
								</div>
								<div className="half-image-content">
									<div className="content">
										<h2>{title}</h2>
										<h4>{content}</h4>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		)
	}
}

export default HalfImgContent

const desktopData = [
	{
		id: 1,
		imgUrl: `/images/wallet/dummy.png`,
		title: `Safe, secure`,
		content: `Access your wallet with an encrypted keystore file.`,
	},
	{
		id: 2,
		imgUrl: `/images/wallet/dummy.png`,
		title: `Easy to use`,
		content: `Sending crypto should be simple. We got you.`,
	},
	{
		id: 1,
		imgUrl: `/images/wallet/dummy.png`,
		title: `Rewarding`,
		content: `Let your FTM work for you. Stake your FTM to secure the network and get rewarded in return.`,
	},
];

const mobileData = [
	{
		id: 1,
		imgUrl: `/images/wallet/mob-hero.png`,
		title: `Secure and \nanonymous`,
		content: `Your private key is safely stored on your phone and never shared. `,
	},
	{
		id: 2,
		imgUrl: `/images/wallet/mob-hero.png`,
		title: `Send and receive FTM`,
		content: `Yes, it’s as easy as it looks.`,
	},
	{
		id: 1,
		imgUrl: `/images/wallet/mob-hero.png`,
		title: `Stake on the go`,
		content: `Stake your FTM from your phone, check and claim your rewards.`,
	},
]