import React from 'react';
import { Link } from 'react-router-dom';

class NavbarComponent extends React.Component{
    render(){
        console.count("NavbarComponent");
        return <nav className="navbar">
            <div className="nav-center">
                <Link to="/">
                    <img src="" alt="cocktailDB-logo"/>
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    }
}

export default NavbarComponent;