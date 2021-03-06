import React from "react"
import { offerData } from "./Data"
class OffersSection extends React.Component {
    render(){ 
        return(
            <div className="offers-section container section">
                <div className="offer">
                    <h2  className="wow fadeInUp" data-wow-duration="600" data-wow-delay="0.6s">着眼未来</h2>
                    <p  className="wow fadeInUp" data-wow-duration="600" data-wow-delay="0.8s">Fantom 为分散式分类帐提供了最强大的基础.</p>
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
                                    <h4  className="wow fadeInUp" data-wow-duration="600" data-wow-delay={0+"."+(parseInt(id)+parseInt(3))+"s"}>{heading}</h4>
                                    <p   className="wow fadeInUp" data-wow-duration="600" data-wow-delay={0+"."+(parseInt(id)+parseInt(3))+"s"} >{des}</p>
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