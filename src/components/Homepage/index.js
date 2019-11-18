import React from "react"
import Hero from "./Hero"
import Subtitle from "./Subtitle"
import OffersSection from "./Offers"
import Intro from "./IntroSection"
import LatestUpdate from "./Update"
import Carousel from "./carousel"
// import Email from "./emailForm"

const HomePage = () => {
    return(
        <div>
            <Hero />
            <Subtitle/>
            <OffersSection />
            <Intro />
            <Carousel />
            <LatestUpdate />
            {/* <Email /> */}
        </div>
    )
}

export default HomePage