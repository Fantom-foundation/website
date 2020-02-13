import React from "react"
import "aos/dist/aos.css"

class Intro extends React.Component {
  render() {
    return (
      <div className="intro-section section container">
        <div
          className="bg-circle card-img wow fadeInLeft"
          data-wow-duration="600"
          data-wow-delay="0.8s"
        >
          <div className="intro-icon">
            <img
              src="/images/home/fantom_logo.png"
              alt="fantom icon"
              className="card-img wow fadeInRight"
              data-wow-duration="600"
              data-wow-delay="0.8s"
            />
          </div>
        </div>
        <div
          className="intro-text  wow fadeInRight"
          data-wow-duration="600"
          data-wow-delay="0.8s"
        >
          <h2>Fantom 入门介绍</h2>
          <p>生态系统，共识算法，创新.</p>
          <div className="intro-button">
            <a href="/about">
              <input type="submit" value="了解更多" className="button" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Intro
