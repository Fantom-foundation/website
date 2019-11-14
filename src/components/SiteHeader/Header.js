import React from "react"
import { Link } from "gatsby"

const Header = ({location}) => {
    let headerClass
    if(location.pathname === "/developer"){
        headerClass = 'nav-development'
    }
    else if(location.pathname === "/foundation"){
        headerClass = 'nav-foundation'
    }

    let imgsrc 
    if(location.pathname === "/developer"){
        imgsrc =  '/images/home/fantom_name_blue.svg'
    }
    else if(location.pathname === "/foundation"){
        imgsrc =  '/images/home/fantom_name_blue.svg'
    }
    else {
        imgsrc = '/images/home/fantom header logo white v3.png'
    }

    return(
        <header className={`header ${headerClass}`}>
            <div className="inner-container">
                <h1 className="logo"><Link to="#"><img src={imgsrc} alt=""/></Link></h1>
                <ul className="main-nav">
                    <li><Link to="/about">What is Fantom?</Link></li>
                    <li><Link to="/developer">Developers</Link></li>
                    <li><Link to="#">Articles</Link></li>
                    <li><Link to="/foundation">Foundation</Link></li>
                </ul>
            </div> 
        </header> 
       
    )
}

export default Header