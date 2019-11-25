import React from "react"
import AOS from 'aos'
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
                    <h2 data-aos="slide-up">The most advanced, fast, and secure consensus for distributed networks.</h2>
                    <p data-aos="slide-up">Whether you’re issuing a stablecoin, creating a new smart economy, or powering a smart city, Fantom’s modular approach lets you focus on building the perfect decentralized application, or mainnet — as we call it.
                    </p>
                </div>
            </div>
        )
    }
}

export default Subtitle