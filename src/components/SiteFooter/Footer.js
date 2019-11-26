import React from "react"

const Footer = () => {
    return (
        <footer>
            <div className="footer-section">
                <div className="container footer-inner-container">
                    <div className="footer-fantom-icon">
                        <ul>
                            <li><a href="/"><img src="/images/footer/fantom-logo-white-v-3.svg" alt="fantom icon" /></a></li>
                            <li></li>
                            <li>
                                <span><a target="_blank" href="https://twitter.com/FantomFDN"><img src="/images/footer/twitter.svg" alt="twitter" /></a></span>
                                <span><a target="_blank" href="https://t.me/Fantom_English"><img src="/images/footer/telegram.svg" alt="telegram" /></a></span>
                                <span><a target="_blank" href="https://github.com/Fantom-Foundation"><img src="/images/footer/github.svg" alt="github" /></a></span>
                                <span><a target="_blank" href="#"><img src="/images/footer/reddit.svg" alt="reddit" /></a></span>
                                <span><a target="_blank" href="https://www.linkedin.com/company/fantom-foundation/"><img src="/images/footer/linkedin.svg" alt="linkedin" /></a></span>
                                <span><a target="_blank" href="https://medium.com/fantomfoundation"><img src="/images/footer/medium.svg" alt="medium" /></a></span>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-link">
                        <div className="footer-first-col">
                            <ul>
                                <li><a href="/about/">What is Fantom?</a></li>
                                <li><a href="/developer/">Developers</a></li>
                                <li><a href="https://medium.com/fantomfoundation" target="_blank">Articles</a></li>
                            </ul>
                        </div>
                        <div className="footer-first-col">
                            <ul>
                                <li><a href="/foundation/">Foundation</a></li>
                                <li><a href="/Documents/wp_fantom_v1.6.pdf" target="_blank">White Paper</a></li>
                                <li className="careers-link-hide"><a href="#">Careers</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-small-section">
                        <div className="footer-left">
                            <p>@2019 Fantom Foundation</p>
                        </div>
                        <div className="footer-right">
                            <p> <a href="/privay-policy/">Privacy Policy</a></p>
                        </div>
                    </div>
                </div>
                <div className="container footer-inner-container-mobile section">
                    <div className="footer-fantom-icon">
                        <a href="#"><img src="/images/footer/fantom new logo.svg" alt="fantom icon" /></a>
                    </div>
                    <div className="footer-first-col">
                        <p className="footer-link"><a href="/about/">What is Fantom?</a></p>
                        <p className="footer-link"><a href="/developer/">Developers</a></p>
                        <p className="footer-link"><a href="https://medium.com/fantomfoundation" target="_blank">Articles</a></p>
                        <p className="footer-link"><a href="/foundation/">Foundation</a></p>
                        <p className="footer-link"><a href="/Documents/wp_fantom_v1.6.pdf" target="_blank">White Paper</a></p>
                        <p className="footer-link">
                            <span><a target="_blank" href="https://twitter.com/FantomFDN"><img src="/images/footer/twitter.svg" alt="twitter" /></a></span>
                            <span><a target="_blank" href="https://t.me/Fantom_English"><img src="/images/footer/telegram.svg" alt="telegram" /></a></span>
                            <span><a target="_blank" href="https://github.com/Fantom-Foundation"><img src="/images/footer/github.svg" alt="github" /></a></span>
                            <span><a target="_blank"  href="#"><img src="/images/footer/reddit.svg" alt="reddit" /></a></span>
                            <span><a target="_blank" href="https://www.linkedin.com/company/fantom-foundation/"><img src="/images/footer/linkedin.svg" alt="linkedin" /></a></span>
                            <span><a target="_blank" href="https://medium.com/fantomfoundation"><img src="/images/footer/medium.svg" alt="medium" /></a></span>
                        </p>
                        <p className="footer-link footer-link-light"><a href="/privay-policy/">Privacy Policy</a></p>
                        <p className="footer-link footer-link-light">@2019 Fantom Foundation</p>
                    </div>
                </div>
            </div>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossOrigin="anonymous"></script>
        </footer>
    )
}

export default Footer