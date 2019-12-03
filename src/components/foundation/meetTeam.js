import React from "react"
import { teamData } from "./Data"

class MeetTeam extends React.Component {
    render(){
        return(
            <div className="container section">
                {teamData.map((headingData,i) => {
                    const {
                        heading,
                        discription,
                    } = headingData;
                    return(
                        <div className ="meet-team" key={i}>
                            <h2 className="wow fadeInUp" data-wow-duration="600"  data-wow-delay={0+"."+(parseInt(i)+parseInt(3))+"s"}>{heading}</h2>
                            <p className="wow fadeInUp" data-wow-duration="600"  data-wow-delay={0+"."+(parseInt(i)+parseInt(3))+"s"}>{discription}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default MeetTeam