import React from "react"
import { Link } from "gatsby"
// import 'bootstrap/dist/js/bootstrap.bundle.min'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      menuOpen: false,
    }
  }
  toggle = () => {
    this.setState({
      menuOpen: !this.state.menuOpen,
    })
    // setMenuOpen(!menuOpen)
  }

  onClick = () => {
    this.toggle()
  }
  render() {
    const { menuOpen } = this.state
    const menuClass = menuOpen ? "openMenu" : ""
    return (
      <header className="header">
        <div className="container navigation">
          <h1 className="logo">
            <Link to="/">
              <img
                src="/images/menu-Icon/fantom_logo_white_new.svg"
                alt="Fantom"
              />
            </Link>
          </h1>
          <ul className="main-nav">
            <li>
              <Link to="https://explorer.fantom.network/">Explorer</Link>
            </li>
            <li>
              <Link to="/wallet/">Wallet</Link>
            </li>
            <li>
              <Link to="/about/">What is Fantom?</Link>
            </li>
            <li>
              <Link to="/developer/">Developers</Link>
            </li>
            <li>
              <a
                href="https://medium.com/fantomfoundation"
                target="_blank"
                rel="noopener noreferrer"
              >
                Articles
              </a>
            </li>
            <li>
              <Link to="/foundation/">Foundation</Link>
            </li>
          </ul>
        </div>
        <div id="mySidenav" className="sidenav">
          <button className="sideNav-button" onClick={() => this.toggle()}>
            <span>
              <img src="/images/menu-Icon/NAV.svg" alt="navigation" />
            </span>
          </button>
          <div className={`slide-right ${menuClass}`}>
            <div className="mobile-nav-header">
              <span className="nav-img">
                <Link to="/">
                  <img src="/images/menu-Icon/fantomBluelogo.svg" alt="" />
                </Link>
              </span>
              <span className="close-button" onClick={() => this.toggle()}>
                <img src="/images/menu-Icon/X.svg" alt="close Button" />
              </span>
            </div>

            <ul>
              <li>
                <Link to="https://explorer.fantom.network/">Explorer</Link>
              </li>
              <li>
                <Link to="/wallet/">Wallet</Link>
              </li>
              <li>
                <Link to="/about/">What is Fantom?</Link>
              </li>
              <li>
                <Link to="/developer/">Developers</Link>
              </li>
              <li>
                <a
                  href="https://medium.com/fantomfoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Articles
                </a>
              </li>
              <li>
                <Link to="/foundation/">Foundation</Link>
              </li>
              <li>
                <a
                  href="/Documents/wp_fantom_v1.6.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  White Paper
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
