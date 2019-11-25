import React from "react"
import { Link } from "gatsby"
// import 'bootstrap/dist/js/bootstrap.bundle.min'

class Header extends React.Component{
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
        
      onClick = () =>{
        this.toggle()
      }
    render () {
        const { menuOpen, visible } = this.state;
        const menuClass = menuOpen ? "openMenu" : ""
        let headerClass
        if(this.props.location.pathname === "/developer/"){
            headerClass = 'nav-development'
        }
        else if(this.props.location.pathname === "/foundation/"){
            headerClass = 'nav-foundation'
        }
        else if(this.props.location.pathname === "/"){
            headerClass = 'home'
        }
        let imgsrc 
        if(this.props.location.pathname === "/developer/"){
            imgsrc =  '/images/home/fantom_name_blue.svg'
        }
        else if(this.props.location.pathname === "/foundation/"){
            imgsrc =  '/images/home/fantom_name_blue.svg'
        }
        else {
            imgsrc = '/images/footer/fantom-logo-white-v-3.svg'
        }
        let navicon 
        if(this.props.location.pathname === "/developer/"){
            navicon =  '/images/menu-Icon/NAVblue.svg'
        }
        else if(this.props.location.pathname === "/foundation/"){
            navicon =  '/images/menu-Icon/NAVblue.svg'
        }
        else {
            navicon = '/images/menu-Icon/NAV.svg'
        }
    
    return(
        <header className={`header ${headerClass}`}>
            <div className="container navigation">
                    <h1 className="logo"><Link to="#"><img src={imgsrc} alt=""/></Link></h1>
                    <ul className="main-nav">
                        <li><Link to="/about/">What is Fantom?</Link></li>
                        <li><Link to="/developer/">Developers</Link></li>
                        <li><a href="https://medium.com/fantomfoundation" target="_blank">Articles</a></li>
                        <li><Link to="/foundation/">Foundation</Link></li>
                    </ul>
                </div> 
                <div id="mySidenav" className="sidenav">
                <button className= {`sideNav-button ${headerClass}`} onClick={() => this.toggle()}>
                        <span><img src={navicon} alt="navigation"/></span>
                    </button>
                    <div className={`slide-right ${menuClass}` }>
                    <div className="mobile-nav-header">
                            <span className="nav-img"><Link to="#"><img src="/images/home/fantom_name_blue.svg" alt=""/></Link></span>
                            <span className="close-button" onClick={() => this.toggle()}><img src="/images/menu-Icon/X.svg" alt="close Button"/></span>
                        </div>
                        
                        <ul>
                            <li><Link to="/about/">What is Fantom?</Link></li>
                            <li><Link to="/developer/">Developers</Link></li>
                            <li><Link to="#">Articles</Link></li>
                            <li><Link to="/foundation/">Foundation</Link></li>
                            <li><a href="/Documents/wp_fantom_v1.6.pdf" target="_blank">White Paper</a></li>
                        </ul>
                    </div>
                </div>
        </header>   
        )    
    }
}

export default Header