import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/js/bootstrap.bundle.min'

const Header = ({location}) => {
    console.log()
    let headerClass
    if(location.pathname === "/developer/"){
        headerClass = 'nav-development'
    }
    else if(location.pathname === "/foundation/"){
        headerClass = 'nav-foundation'
    }

    let imgsrc 
    if(location.pathname === "/developer/"){
        imgsrc =  '/images/home/fantom_name_blue.svg'
    }
    else if(location.pathname === "/foundation/"){
        imgsrc =  '/images/home/fantom_name_blue.svg'
    }
    else {
        imgsrc = '/images/home/fantom header logo white v3.png'
    }

    return(
        <header className={`header ${headerClass}`}>
            {/* <div className="container">
                <h1 className="logo"><Link to="#"><img src={imgsrc} alt=""/></Link></h1>
                <ul className="main-nav">
                    <li><Link to="/about/">What is Fantom?</Link></li>
                    <li><Link to="/developer/">Developers</Link></li>
                    <li><Link to="#">Articles</Link></li>
                    <li><Link to="/foundation/">Foundation</Link></li>
                </ul>
            </div>  */}
            <nav className="navbar navbar-expand-lg navbar-light container">
                <h1 className="logo navbar-brand"><Link to="#"><img src={imgsrc} alt=""/><span className="sr-only">(current)</span></Link></h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="sr-only">Toggle navigation</span>
                    <span className="navbar-toggler-icon top-bar"></span>
                    <span className="navbar-toggler-icon middle-bar"></span>
                    <span className="navbar-toggler-icon bottom-bar"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav main-nav">
                        <li className="nav-item active">
                            <Link to="/about/">What is Fantom?</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/developer/">Developers</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#">Articles</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/foundation/">Foundation</Link>
                        </li>
                        <li className="nav-item mobile-nav-only">
                            <a href="/Documents/wp_fantom_v1.6.pdf" target="_blank">white Paper</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>   
    )
}

export default Header