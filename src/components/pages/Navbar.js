import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {GiMoonOrbit} from 'react-icons/gi';
import { FaBars, FaTimes} from 'react-icons/fa';
// import { MenuItems } from './MenuItems';
// import { Button } from '../Button';
// import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)
    return (
        <>
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo">
                    Astronomers Anonymous
                    <GiMoonOrbit className="navbar-icon"/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/" className="nav-links">
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/" className="nav-links">
                        Find an Observatory
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/log-in" className="nav-links">
                            Log In
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/contact-us" className="nav-links">
                            Contact Us
                        </Link>
                    </li>
                    <li className='nav-btn'>
                        {button ? (
                            <Link to="/sign-up" className="btn-link">
                                <Button buttonStyle='btn--outline'>
                                    Sign Up
                                </Button>
                            </Link>
                        ): (
                            <Link to="/sign-up" className="btn-link">
                                <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                                    Sign Up
                                </Button>
                            </Link>
                        )}
                    </li>

                </ul>
            </div>
        </div>
        </>
    )
}


// class Navbar extends Component {
//     state = {clicked: false}

//     handleClick = () => {
//         this.setState({clicked: !this.state.clicked});
//     }
//     render() {
//         return <nav className="NavbarItems">
//             <h1 className="navbar-logo">Astronomers Anonymous  <GiMoonOrbit className="navbar-icon"/>
// </h1>
//             <div className="menu-icon" onClick={this.handleClick}>
//                 <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
//             </div>
//             <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
//                 {MenuItems.map((item, index) => {
//                     return (
//                         <li key={index}>
//                             <a className={item.cName} href={item.url}>
//                                 {item.title}
//                             </a>
//                         </li>
//                     )
//                 })}
//             </ul>
//             <Button>Sign Up</Button>
//         </nav>
//     }
// }


export default Navbar
