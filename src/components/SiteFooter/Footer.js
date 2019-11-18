import React from "react"

const Footer = () => {
    return(
        <footer>
            <div className="footer-section">
                <div className="container footer-inner-container">
                    <div className="footer-fantom-icon">
                        <ul>
                            <li><a href="#"><img src="/images/home/fantom logo white v3.png" alt="fantom icon" /></a></li>
                            <li></li>
                            <li>
                                <span><a href="https://twitter.com/FantomFDN"><img src="/images/footer/twitter.svg" alt="twitter" /></a></span>
                                <span><a href="https://t.me/Fantom_English"><img src="/images/footer/telegram.svg" alt="telegram" /></a></span>
                                <span><a href="https://github.com/Fantom-Foundation"><img src="/images/footer/github.svg" alt="github" /></a></span>
                                <span><a href="#"><img src="/images/footer/reddit.svg" alt="reddit" /></a></span>
                                <span><a href="https://www.linkedin.com/company/fantom-foundation/"><img src="/images/footer/linkedin.svg" alt="linkedin" /></a></span>
                                <span><a href="https://medium.com/fantomfoundation"><img src="/images/footer/medium.svg" alt="medium" /></a></span>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-link">
                        <div className="footer-first-col">
                            <ul>
                                <li><a href="/about">What is Fantom?</a></li>
                                <li><a href="/developer">Developers</a></li>
                                <li><a href="#">Articles</a></li>
                            </ul>
                        </div>
                        <div className="footer-first-col">
                            <ul>
                                <li><a href="/foundation">Foundation</a></li>
                                <li><a href="/Documents/wp_fantom_v1.6.pdf" target="_blank">White Paper</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-small-section">
                        <div className="footer-left">
                            <p>@2019 Fantom Foundation</p>
                        </div>
                        <div className="footer-right">
                            <p> <a href="#">Cookies </a></p>
                            <p> <a href="#">Privacy Policy</a></p>
                            <p> <a href="#">Terms and Conditions</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer