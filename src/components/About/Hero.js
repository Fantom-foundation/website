import React from "react"
import 'aos/dist/aos.css'

class Hero extends React.Component{
    componentDidMount() {
        const AOS = require('aos');
        this.aos = AOS
        this.aos.init({
            duration: 1000,
            disable: 'mobile',
            once: true,
        })
    }
    render(){
        return(
            <div className="hero-section">
                <div className="container">
                    <h1 data-aos="fade-up" data-aos-easing="ease-in-cubic" data-aos-duration="1000" data-aos-offset="200">What is Fantom?</h1>
                </div>
            </div>
        )
    }
}

export default Hero