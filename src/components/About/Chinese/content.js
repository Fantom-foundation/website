import React from "react"
import { aboutData } from "./Data"

const Content = () => {
    return (
        <div className="container section">
            {aboutData.map(aboutContent => {
                const {
                    id,
                    heading,
                    spanOne,
                    content,
                    spanTwo,
                    contentTwo,
                    contentBefore,
                    spanAfter,
                    spanAfterTwo,
                    list,
                } = aboutContent;
                return(
                    <div className="introduction section wow fadeInUp" data-wow-duration="600" key={id}>
                        <h4>{heading}</h4>
                        <div>
                            {spanOne && <span> {spanOne} </span>}
                            {content && content}
                            {spanTwo && <span> {spanTwo} </span>}
                            {contentTwo && contentTwo}
                            {contentBefore && contentBefore}
                            {spanAfter && spanAfter}
                            {spanAfterTwo && spanAfterTwo}
                        </div>
                        <div>
                            {list &&
                                <ul>
                                    {list.map(listContent => {
                                        const {
                                            lid,
                                            li,
                                        } = listContent;
                                        return (
                                            <li key={lid}>
                                                {li}
                                            </li>
                                        )
                                    })}
                                </ul>
                            }
                        </div>        
                    </div>
                )  
            })}                
        </div>
    )
}


export default Content