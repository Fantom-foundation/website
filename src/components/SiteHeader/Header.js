import React from "react"
import { Link } from "gatsby"

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
        const { menuOpen} = this.state;
        console.log();
        const menuClass = menuOpen ? "openMenu" : ""
        let headerClass
        if(this.props.location.pathname === "/developer/"){
            headerClass = 'nav-development'
        }
        else if(this.props.location.pathname === "/foundation/"){
            headerClass = 'nav-foundation'
        }
    
        let imgsrc 
        if(this.props.location.pathname === "/developer/"){
            imgsrc =  '/images/home/fantom_name_blue.svg'
        }
        else if(this.props.location.pathname === "/foundation/"){
            imgsrc =  '/images/home/fantom_name_blue.svg'
        }
        else {
            imgsrc = '/images/footer/fantom logo white v3.svg'
        }
    
    return(
        <header className={`header ${headerClass}`}>
            <div className="container navigation">
                    <h1 className="logo"><Link to="#"><img src={imgsrc} alt=""/></Link></h1>
                    <ul className="main-nav">
                        <li><Link to="/about/">What is Fantom?</Link></li>
                        <li><Link to="/developer/">Developers</Link></li>
                        <li><Link to="#">Articles</Link></li>
                        <li><Link to="/foundation/">Foundation</Link></li>
                    </ul>
                </div> 
                <div id="mySidenav" className="sidenav">
                    <button className= {`sideNav-button ${headerClass}`} onClick={() => this.toggle()}>
                        <span className="navbar-toggler-icon top-bar"></span>
                        <span className="navbar-toggler-icon middle-bar"></span>
                        <span className="navbar-toggler-icon bottom-bar"></span>
                    </button>
                    <div className={`slide-right ${menuClass}` }>
                        <div className="mobile-nav-header">
                            <span className="nav-img"><Link to="#"><img src="/images/home/fantom_name_blue.svg" alt=""/></Link></span>
                            <span className="close-button" onClick={() => this.toggle()}>X</span>
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