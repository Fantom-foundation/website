import React from "react"
import 'aos/dist/aos.css'
class Hero extends React.Component {
    componentDidMount() {
        const AOS = require('aos');
        this.aos = AOS
        this.aos.init({
            duration: 1000,
            disable: 'mobile',
            once: true,
        })
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className="hero-section container-fluid">
                <div className="container">
                    <h1 data-aos-anchor-placement="top-center" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="600">The core of the new internet</h1>
                </div>
            </div>
        )
    }
}

export default Hero