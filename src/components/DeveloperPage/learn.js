import React from "react"
import { learnMoreData, learnHeadingData } from "./Data"
import 'aos/dist/aos.css'
import { FormattedMessage, injectIntl, useIntl } from "gatsby-plugin-intl"
const Learn = () => {
    const intl = useIntl()
    return (
        <div className="container section">
            <div className="learn">
                {learnHeadingData.map((headingData, index) => {
                    const {
                        heading,
                        discription,
                        img,
                    } = headingData;
                    return (
                        <div className="learn-section" key={index}>
                            <div className="learn-text">
                                <h2 className="wow fadeInUp" data-wow-duration="600"><FormattedMessage id={`developerPage.learnHeadingData.heading`} /></h2>
                                <p className="wow fadeInUp" data-wow-duration="600"><FormattedMessage id={`developerPage.learnHeadingData.description`} /></p>
                            </div>
                            <div className="learn-img">
                                <img src={intl.formatMessage({ id: `developerPage.learnHeadingData.img` })} alt="learn" className="wow fadeInUp" data-wow-duration="600" />
                            </div>
                        </div>
                    )
                })}
                <div className="learn-list">
                    {learnMoreData.map((learnList, index) => {
                        const {
                            id,
                            heading,
                            link,
                            imgSrc,
                        } = learnList;
                        return (
                            <div className="list" key={id}>
                                <a href={intl.formatMessage({ id: `developerPage.learnMoreData.${index}.link` })} target="_blank" rel="noopener noreferrer">
                                    <div className="list-text">
                                        <h4 className="wow fadeInUp" data-wow-duration="600">{intl.formatMessage({ id: `developerPage.learnMoreData.${index}.heading` })} </h4>
                                    </div>
                                    <div className="list-icon">
                                        <img src={intl.formatMessage({ id: `developerPage.learnMoreData.${index}.imgSrc` })}  alt="learn" className="wow fadeInRight" data-wow-duration="600" />
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


export default Learn