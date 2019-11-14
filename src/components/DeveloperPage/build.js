import React from "react"

const Build = () => {
    return(
        <div className="inner-container section">
            <div className="build">
                <div className="build-section-text">
                    <h2>BUILD.</h2>
                    <p>Join our developer community on Github and stay up to date with our progress.</p>
                    <a href="https://github.com/Fantom-foundation" target="_blank"><input type="submit" value="Get Started" className="button"/></a>
                    
                </div>
                <div className="build-section-img">
                        <div className="build-block">
                            <img src="/images/home/600px-Octicons-mark-github.png" alt="github" />
                        </div>
                </div>
            </div>

        </div>
    )
}

export default Build