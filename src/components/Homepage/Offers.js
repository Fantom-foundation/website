import React from "react"
import { offerData } from "./Data"
import 'aos/dist/aos.css'


  
class OffersSection extends React.Component {
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
            <div className="offers-section container section">
                <div className="offer">
                    <h2 data-aos="fade-up" data-aos-easing="ease-in-cubic" data-aos-duration="1000" data-aos-offset="200">Built with the future in mind</h2>
                    <p data-aos="fade-up" data-aos-easing="ease-in-cubic" data-aos-duration="1000" data-aos-offset="200">Fantom offers the most powerful foundations for decentralized ledgers. </p>
                </div>
                <div className="offer-group">
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
                                    <h4 data-aos="fade-up" data-aos-easing="ease-in-cubic" data-aos-duration="1000" data-aos-offset="200">{heading}</h4>
                                    <p data-aos="fade-up" data-aos-easing="ease-in-cubic" data-aos-duration="1000" data-aos-offset="200">{des}</p>
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