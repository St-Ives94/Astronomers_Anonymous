import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {GiMoonOrbit} from 'react-icons/gi';
import { FaBars, FaTimes} from 'react-icons/fa';
import { Button } from '../Button';
import './Navbar.css';
import {IconContext } from 'react-icons/lib';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    },[])
    window.addEventListener('resize', showButton)


    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    Astronomers Anonymous
                    <GiMoonOrbit className="navbar-icon"/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Find an Observatory
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/log-in" className="nav-links" onClick={closeMobileMenu}>
                            Log In
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/contact-us" className="nav-links" onClick={closeMobileMenu}>
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
                            <Link to="/sign-up" className="btn-link" onClick={closeMobileMenu}>
                                <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                                    Sign Up
                                </Button>
                            </Link>
                        )}
                    </li>

                </ul>
            </div>
        </div>
        </IconContext.Provider>
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
