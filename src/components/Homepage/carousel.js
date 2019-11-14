import React from "react"
import Slider from "react-slick"

class Carousel extends React.Component {
    render() {
      var settings = {
        arrows: true,
        infinite: true,
        speed: 100,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        // nextArrow: true,
        // prevArrow: true,
        
      };
      return (
        <div className="inner-container carousel-section section">
          <h2 className="slider-heading">Latest articles</h2>
          <Slider {...settings}>
            <div className="carousel-card ">
              <div className="Technical-Update subcard">
                <div className="heading">
                  <h2> Technical Update 15</h2>
                  <p>October 14, 2019</p>
                </div>
                <div>
                  <p>Implemented part of eth backend api for clef testing purposes: PR#323  Applied fix to genesis: PR#324</p>
                  <p>Improvement to “seeing” strategy: PR#325</p>
                  <p>Network demo setup</p>
                </div>
                <div className="read"><a href="#">Read More</a></div>
              </div>
            </div>
            <div className="carousel-card">
              <div className="Fantom-Status subcard">
              <div className="heading">
                <h2>Fantom Status</h2>
                <p>October 5, 2019</p>
              </div>
                <div>
                  <p>Fantom has completed it’s consensus implementation of both lachesis and txflow. Both are currently available and ready for usage via github.</p>
                  <p>Lachesis and txflow have</p>
                </div>
                <div className="read"><a href="#">Read More</a></div>
              </div>
            </div>
            <div className="carousel-card">
              <div className="When-Mainnet subcard">
              <div className="heading">
                <h2>‘’When Mainnet?’’</h2>
                <p>September 30, 2019</p>
              </div>
                <div>
                  <p>Hey Fantomians, over the past few weeks we have received an increasing amount of questions about the launch-date of our first mainnet, the progress on the Go-Lachesis based mainnet, and the Statheros project</p>
                </div>
                <div className="read"><a href="#">Read More</a></div>
              </div>
            </div>
            <div className="carousel-card">
              <div className="Adapt subcard">
              <div className="heading">
                <h2>Statheros, Designed To Adapt.</h2>
                <p>September 25, 2019</p>
              </div>
                <div>
                  <p>Regulatory uncertainty is the bane of innovation. Cryptocurrencies and digital assets have made incredible strides in bringing the blockchain industry to where it is today, and have brought with it, increasing scruti</p>
                </div>
                <div className="read"><a href="#">Read More</a></div>
              </div>
            </div>
            <div className="carousel-card">
              <div className="Fantom-Status subcard">
              <div className="heading">
                <h2>Fantom Status</h2>
                <p>October 5, 2019</p>
              </div>
                <div>
                  <p>Fantom has completed it’s consensus implementation of both lachesis and txflow. Both are currently available and ready for usage via github.</p>
                  <p>Lachesis and txflow have</p>
                </div>
                <div className="read"><a href="#">Read More</a></div>
              </div>
            </div>
          </Slider>
        </div>
        
      );
    }
}

  export default Carousel