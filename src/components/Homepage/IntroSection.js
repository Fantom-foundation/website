import React from "react"


const Intro = () => {
    return(
        <div className="intro-section section container">
            <div className="bg-circle"> 
                <div className="intro-icon">
                    <img src="/images/home/fantom_logo.png" alt="fantom icon" />
                </div>
            </div>  
            <div className="intro-text">
                <h2>Introduction to Fantom</h2>
                <p>The Ecosystem, The Consensus, The Innovation.</p>
                <div className="intro-button">
                    <input type="submit" value="Learn More" className="button"/>
                </div>
            </div>  
        </div>
    )
}

export default Intro