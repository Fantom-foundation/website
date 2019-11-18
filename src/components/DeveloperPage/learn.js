import React from "react"
import { learnMoreData, learnHeadingData } from "./Data"


const Learn = () => {
    return(
        <div className="container section">
            <div className="learn">
            {learnHeadingData.map(headingData => {
                const {
                    heading,
                    discription,
                    img,
                } = headingData;
                return(
                        <div className="learn-section">
                            <div className="learn-text">
                                <h2>{heading}</h2>
                                <p>{discription}</p>
                            </div>
                            <div className="learn-img">
                                <img src={img} alt="learn" />
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
                                <h4>{heading}</h4>
                            </div>
                            <div className="list-icon">
                                <a href={link} target="_blank"><img src= {imgSrc} alt="learn" /></a>
                            </div>
                        </div>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    )
}

export default Learn