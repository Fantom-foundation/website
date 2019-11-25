import React from "react"
import { offerData } from "./Data"
import AOS from 'aos'
import 'aos/dist/aos.css'


  
class OffersSection extends React.Component {
    componentDidMount() {
        const AOS = require('aos');
        this.aos = AOS
        this.aos.init()
    }
    render(){ 
        return(
            <div className="offers-section container section">
                <div className="offer" data-aos="slide-up">
                    <h2>Built with the future in mind</h2>
                    <p>Fantom offers the most powerful foundations for decentralized ledgers. </p>
                </div>
                <div className="offer-group" data-aos="slide-up">
                {offerData.map(offerCard => {
                    const {
                        id,
                        classname,
                        heading,
                        des,
                        img,
                        alt,
                    } = offerCard;
                    return(
                            <div className={classname} key={id}>
                                <div className="offer-text" data-aos="slide-up">
                                    <h4>{heading}</h4>
                                    <p>{des}</p>
                                </div>
                                <div className="offer-icon" data-aos="slide-up">
                                    <img src={img} alt={alt} />
                                </div>
                            </div>
                        )
                    })}   
                </div>
            </div>
        )
    }
}
export default OffersSection