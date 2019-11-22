import React from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'



const Intro = () => {
    AOS.init({
        duration: 1200,
      })
    return(
        <div className="intro-section section container">
            <div className="bg-circle" data-aos="fade-right"> 
                <div className="intro-icon">
                    <img src="/images/home/fantom_logo.png" alt="fantom icon" data-aos="zoom-in"/>
                </div>
            </div>  
            <div className="intro-text" data-aos="fade-right">
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

export default Intro