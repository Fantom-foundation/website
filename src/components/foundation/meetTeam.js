import React from "react"
import { teamData } from "./Data"

class MeetTeam extends React.Component {
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
            <div className="container section">
                {teamData.map((headingData,i) => {
                    const {
                        heading,
                        discription,
                    } = headingData;
                    return(
                        <div className ="meet-team" key={i}>
                            <h2 data-aos="slide-up">{heading}</h2>
                            <p data-aos="slide-up">{discription}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default MeetTeam