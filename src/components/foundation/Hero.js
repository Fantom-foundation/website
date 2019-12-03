import React from "react"
import WOW from 'wowjs';

class Hero extends React.Component {
    componentDidMount() {
        const wow = new WOW.WOW({
            offset: 100
        });
        wow.init();
    }
    render(){
        return(
            <div className="hero-section">
                <div className="container">
                    <h1 className="wow fadeInUp" data-wow-duration="600">The Fantom Foundation</h1>
                </div>
            </div>
        )
    }   
}

export default Hero