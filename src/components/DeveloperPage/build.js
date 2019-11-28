import React from "react"
import { buildData } from "./Data"
import 'aos/dist/aos.css'



class Build extends React.Component {
    componentDidMount() {
        const AOS = require('aos');
        this.aos = AOS
        this.aos.init({
            once: true,
            disable: 'mobile'
        })
    }

    render(){
        return(
            <div className="container section">
                {buildData.map((buildcontent,i) => {
                            const { 
                                heading,
                                discription,
                                href,
                                img,
                            } = buildcontent;
                return(
                    <div className="build" key={i}>
                    <div className="build-section-text">
                        <h2 data-aos="slide-up">{heading}</h2>
                        <p data-aos="slide-up">{discription}</p>
                        <a href={href} target="_blank" data-aos="slide-up" rel="noopener noreferrer"><input type="submit" value="Get Started" className="button"/></a>
                        
                    </div>
                    <div className="build-section-img" data-aos="slide-up">
                            <div className="build-block" data-aos="slide-up">
                                <img src={img} alt="github" data-aos="slide-up"/>
                            </div>
                    </div>
                </div>
                )
                })}  

            </div>
        )
    }
}

export default Build