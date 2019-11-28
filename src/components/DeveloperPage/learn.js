import React from "react"
import { learnMoreData, learnHeadingData } from "./Data"
import 'aos/dist/aos.css'


class Learn extends React.Component {
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
                <div className="learn">
                {learnHeadingData.map((headingData,i) => {
                    const {
                        heading,
                        discription,
                        img,
                    } = headingData;
                    return(
                            <div className="learn-section" key={i}>
                                <div className="learn-text">
                                    <h2>{heading}</h2>
                                    <p>{discription}</p>
                                </div>
                                <div className="learn-img">
                                    <img src={img} alt="learn" data-aos="fade-up-left"/>
                                </div>
                            </div>
                        )
                    })}
                    <div className="learn-list">
                        {learnMoreData.map(learnList => {
                            const { 
                                id,
                                heading,
                                link,
                                imgSrc,
                            } = learnList;
                            return(
                            <div className="list" key={id}>
                                <div className="list-text">
                                    <h4 data-aos="slide-up">{heading}</h4>
                                </div>
                                <div className="list-icon">
                                    <a href={link} target="_blank" rel="noopener noreferrer"><img src= {imgSrc} alt="learn" data-aos="fade-up-left" /></a>
                                </div>
                            </div>
                            )
                        })}
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Learn