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
            <div className="hero-section container-fluid">
                <div className="container">
                    <h1 data-aos="fade-up" data-aos-easing="ease-in-cubic" data-aos-duration="1000" data-aos-offset="200">The core of the new internet</h1>
                </div>
            </div>
        )
    }  
}

export default Hero