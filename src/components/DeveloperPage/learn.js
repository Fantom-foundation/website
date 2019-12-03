import React from "react"
import { learnMoreData, learnHeadingData } from "./Data"
import 'aos/dist/aos.css'


class Learn extends React.Component {
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
                                    <h2 className="wow fadeInUp" data-wow-duration="600">{heading}</h2>
                                    <p className="wow fadeInUp" data-wow-duration="600">{discription}</p>
                                </div>
                                <div className="learn-img">
                                    <img src={img} alt="learn" className="wow fadeInUp" data-wow-duration="600"/>
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
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    <div className="list-text">
                                        <h4 className="wow fadeInUp" data-wow-duration="600">{heading}</h4>
                                    </div>
                                    <div className="list-icon">
                                        <img src= {imgSrc} alt="learn" className="wow fadeInRight" data-wow-duration="600" />
                                    </div>
                                </a>
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