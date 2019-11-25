import React from "react"
import 'aos/dist/aos.css'



class Intro extends React.Component {
    componentDidMount() {
        const AOS = require('aos');
        this.aos = AOS
        this.aos.init()
    }
    render(){
        return(
            <div className="intro-section section container">
                <div className="bg-circle" data-aos="fade-right" data-aos-duration="2000"> 
                    <div className="intro-icon">
                        <img src="/images/home/fantom_logo.png" alt="fantom icon" data-aos="zoom-in" data-aos-duration="2000"/>
                    </div>
                </div>  
                <div className="intro-text" data-aos="fade-left" data-aos-duration="1000">
                    <h2>Introduction to Fantom</h2>
                    <p>The Ecosystem, The Consensus, The Innovation.</p>
                    <div className="intro-button">
                        <a href="/about">
                            <input type="submit" value="Learn More" className="button"/>
                        </a>
                        
                    </div>
                </div>  
            </div>
        )
   }
}

export default Intro