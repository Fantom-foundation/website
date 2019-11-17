import React from "react"
import { teamMemberData } from "./Data"

const TeamMember = () => {
    return (
        <div className="container team-inner-container ">
            <div className="team-grid">
                <div className="grid-inner-container section">
                    {teamMemberData.map(member => {
                        const { id,
                            imgUrl,
                            imgAlt,
                            name,
                            designation,
                            linkedInUrl,
                            linkedInAlt,
                            linkedInImg } = member;
                        return(
                            <div className="grid-item" key={id}>
                                <div className="member-image">
                                    <img src= {imgUrl} alt= {imgAlt} />
                                </div>
                                <div className="member-name">
                                    <p>{name}</p>
                                </div>
                                <div className="member-desing">
                                    <p>{designation}</p>
                                </div>
                                <div className="member-linkedin">
                                    <a href={linkedInUrl}>
                                        <img src={linkedInImg} alt= {linkedInAlt} />
                                    </a> 
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    )
}

export default TeamMember