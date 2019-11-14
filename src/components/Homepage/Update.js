import React from "react"
import {Link} from "gatsby"

const LatestUpdate = () => {
    return(
        <div className="update-section section">
            <img src="/images/home/Bg_bottom.png" alt=""/>
            <div className="inner-container">
                <div className="developer-potal">
                    <h3>Developer Portal</h3>
                    <p>Open source. Scalable. Secure.</p>
                    <div className="intro-button">
                        <Link to="#">Learn More</Link>
                    </div>
                </div>
                <div className="fantom-foundation">
                    <h3>The Fantom Foundation</h3>
                    <p>The people, the culture.</p>
                    <div className="intro-button">
                        <Link to="#">Learn More</Link>
                    </div>
                </div>
            </div>
            <div className="inner-container main-update">
                <div className="section update-form">
                    <h2>Get the latest updates</h2>
                    <form>
                        <input type="emal"  value="Email Address" className="email-input"/>
                        <input type="submit" value="Sign Up" className="button"/>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default LatestUpdate