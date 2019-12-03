import React from "react"
import 'aos/dist/aos.css'
import WOW from 'wowjs';
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
                    <h1 className="wow fadeInUp" data-wow-duration="600">The core of the new internet</h1>
                </div>
            </div>
        )
    }
}

export default Hero