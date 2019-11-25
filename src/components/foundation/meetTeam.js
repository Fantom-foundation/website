import React from "react"
import { teamData } from "./Data"
import 'aos/dist/aos.css'

class MeetTeam extends React.Component {
    componentDidMount() {
        const AOS = require('aos');
        this.aos = AOS
        this.aos.init()
    }
    render(){
        return(
            <div className="container section">
                {teamData.map(headingData => {
                    const {
                        heading,
                        discription,
                    } = headingData;
                    return(
                        <div className ="meet-team">
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