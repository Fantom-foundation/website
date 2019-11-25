import React from "react"
import { offerData } from "./Data"
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
                <div className="offer">
                    <h2 data-aos="slide-up">Built with the future in mind</h2>
                    <p data-aos="slide-up">Fantom offers the most powerful foundations for decentralized ledgers. </p>
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
                                <div className="offer-text">
                                    <h4>{heading}</h4>
                                    <p data-aos="slide-up" data-aos-duration='2000'>{des}</p>
                                </div>
                                <div className="offer-icon">
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