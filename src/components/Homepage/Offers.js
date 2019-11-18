import React from "react"
import { offerData } from "./Data"

const OffersSection = () => {
    return(
        <div className="offers-section container section">
            <div className="offer">
                <h2>Built with the future in mind</h2>
                <p>Fantom offers the most powerful foundations for decentralized ledgers. </p>
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
                                <h4>{heading}</h4>
                                <p>{des}</p>
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

export default OffersSection