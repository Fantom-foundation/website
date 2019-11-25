import React from "react"
import 'aos/dist/aos.css'

class Subtitle extends React.Component {
    componentDidMount() {
        const AOS = require('aos');
        this.aos = AOS
        this.aos.init({
            disable: 'mobile',
            once: true,
        })
    }
    render(){
        return(
            <div className="container section">
                <div className="subtitle-section">
                    <h2 data-aos="fade-up" data-aos-easing="ease-in-cubic" data-aos-duration="1000" data-aos-offset="200">The most advanced, fast, and secure consensus for distributed networks.</h2>
                    <p data-aos="fade-up" data-aos-easing="ease-in-cubic" data-aos-duration="1000" data-aos-offset="200">Whether you’re issuing a stablecoin, creating a new smart economy, or powering a smart city, Fantom’s modular approach lets you focus on building the perfect decentralized application, or mainnet — as we call it.
                    </p>
                </div>
            </div>
        )
    }
}

export default Subtitle