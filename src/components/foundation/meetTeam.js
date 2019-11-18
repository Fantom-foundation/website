import React from "react"
import { teamData } from "./Data"

const MeetTeam = () => {
    return(
        <div className="container section">
            {teamData .map(headingData => {
                const {
                    heading,
                    discription,
                } = headingData;
                return(
                    <div className ="meet-team">
                        <h2>{heading}</h2>
                        <p>{discription}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default MeetTeam