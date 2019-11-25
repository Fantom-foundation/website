import React from "react"
import 'aos/dist/aos.css'

class Hero extends React.Component {
    componentDidMount() {
        const AOS = require('aos');
        this.aos = AOS
        this.aos.init({
            duration: 1000,
        })
    }
    render(){
        return(
            <div className="hero-section team-hero">
                <div className="container foundation-hero">
                    <h1 data-aos="fade-up" data-aos-easing="ease-in-cubic" data-aos-duration="2000" data-aos-offset="200">The Fantom Foundation</h1>
                </div>
            </div>
        )
    }   
}

export default Hero