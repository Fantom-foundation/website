import React from "react"
import { FormattedMessage, Link, injectIntl } from "gatsby-plugin-intl"

const Footer = () => {
  const currentYear = new Date()
  const year = currentYear.getFullYear()
  return (
    <footer>
      <div className="footer-section">
        <div className="container footer-inner-container">
          <div className="first-section">
            <div className="col first-col">
              <div className="footer-logo">
                <a href="/">
                  <img
                    src="/images/menu-Icon/fantom_logo_white_new.svg"
                    alt="fantom icon"
                  />
                </a>
              </div>
              <div>
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/FantomFDN"
                  >
                    <img src="/images/footer/twitter.svg" alt="twitter" />
                  </a>
                </span>
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://t.me/Fantom_English"
                  >
                    <img src="/images/footer/telegram.svg" alt="telegram" />
                  </a>
                </span>
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Fantom-Foundation"
                  >
                    <img src="/images/footer/github.svg" alt="github" />
                  </a>
                </span>
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.reddit.com/r/FantomFoundation/"
                  >
                    <img src="/images/footer/reddit.svg" alt="reddit" />
                  </a>
                </span>
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/company/fantom-foundation/"
                  >
                    <img src="/images/footer/linkedin.svg" alt="linkedin" />
                  </a>
                </span>
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://medium.com/fantomfoundation"
                  >
                    <img src="/images/footer/medium.svg" alt="medium" />
                  </a>
                </span>
              </div>
            </div>
            <div className="col second-col">
              <div>
                <Link to="/about/"><FormattedMessage id="header.menu.three" /></Link>
              </div>
              <div>
                <Link to="/developer/"><FormattedMessage id="header.menu.four" /></Link>
              </div>
              <div>
                <a
                  href="https://medium.com/fantomfoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FormattedMessage id="header.menu.five" />
                </a>
              </div>
            </div>
            <div className="col third-col">
              <div>
                <Link to="/foundation/"><FormattedMessage id="header.menu.six" /></Link>
              </div>
              <div>
                <a
                  href="/Documents/wp_fantom_v1.6.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FormattedMessage id="header.menu.seven" />
                </a>
              </div>
              <div>
                <Link to="/roadmap/"><FormattedMessage id="header.menu.eight" /></Link>
              </div>
            </div>
          </div>
          <div className="second-section">
            <div><FormattedMessage id="header.menu.copyright" /></div>
            <div></div>
            <div className="privacy-policy">
              <Link to="/privacy-policy/"><FormattedMessage id="header.menu.privacy" /></Link>
            </div>
          </div>
        </div>

        <div className="container footer-inner-container-mobile section">
          <div className="footer-first-col">
            <p className="footer-link">
              <Link href="/">
                <img src="/images/footer/fantomnewlogo.svg" alt="fantom icon" />
              </Link>
            </p>
            <p className="footer-link">
              <Link to="/about/"><FormattedMessage id="header.menu.three" /></Link>
            </p>
            <p className="footer-link">
              <Link to="/developer/"><FormattedMessage id="header.menu.four" /></Link>
            </p>
            <p className="footer-link">
              <a
                href="https://medium.com/fantomfoundation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FormattedMessage id="header.menu.five" />
              </a>
            </p>
            <p className="footer-link">
              <Link to="/foundation/"><FormattedMessage id="header.menu.six" /></Link>
            </p>
            <p className="footer-link">
              <a
                href="/Documents/wp_fantom_v1.6.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FormattedMessage id="header.menu.seven" />
              </a>
            </p>
            <p className="footer-link">
              <Link to="/roadmap/"><FormattedMessage id="header.menu.eight" /></Link>
            </p>
            <p className="footer-link">
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/FantomFDN"
                >
                  <img src="/images/footer/twitter.svg" alt="twitter" />
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://t.me/Fantom_English"
                >
                  <img src="/images/footer/telegram.svg" alt="telegram" />
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Fantom-Foundation"
                >
                  <img src="/images/footer/github.svg" alt="github" />
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.reddit.com/r/FantomFoundation/"
                >
                  <img src="/images/footer/reddit.svg" alt="reddit" />
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/fantom-foundation/"
                >
                  <img src="/images/footer/linkedin.svg" alt="linkedin" />
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://medium.com/fantomfoundation"
                >
                  <img src="/images/footer/medium.svg" alt="medium" />
                </a>
              </span>
            </p>
            <p className="footer-link footer-link-light">
              <Link to="/privacy-policy/"><FormattedMessage id="header.menu.privacy" /></Link>
            </p>
            <p className="footer-link footer-link-light">
              <FormattedMessage id="header.menu.copyright" />
            </p>
          </div>
        </div>
      </div>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
        integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd"
        crossOrigin="anonymous"
      ></script>
    </footer>
  )
}

export default Footer
