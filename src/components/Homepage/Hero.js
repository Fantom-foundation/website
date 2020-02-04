import React from "react"
import 'aos/dist/aos.css'
import WOW from 'wowjs';
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
class Hero extends React.Component {
    componentDidMount() {
        const wow = new WOW.WOW({
            offset: 100
        });
        wow.init();
    }
    render() {
        return (
            <div className="hero-section container-fluid">
                <div className="container">
                    <h1 className="wow fadeInUp" data-wow-duration="600">
                      <FormattedMessage id="home.hero.title" />
                    </h1>
                </div>
            </div>
        )
    }
}

export default Hero