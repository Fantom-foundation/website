import React from "react"
import { buildData } from "./Data"



const Build = () => {
    return(
        <div className="container section">
            {buildData.map(buildcontent => {
                        const { 
                            heading,
                            discription,
                            href,
                            img,
                        } = buildcontent;
            return(
                <div className="build">
                <div className="build-section-text">
                    <h2>{heading}</h2>
                    <p>{discription}</p>
                    <a href={href} target="_blank"><input type="submit" value="Get Started" className="button"/></a>
                    
                </div>
                <div className="build-section-img">
                        <div className="build-block">
                            <img src={img} alt="github" />
                        </div>
                </div>
            </div>
            )
            })}  

        </div>
    )
}

export default Build