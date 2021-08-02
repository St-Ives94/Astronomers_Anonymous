import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {GiMoonOrbit} from 'react-icons/gi';
import { FaBars, FaTimes} from 'react-icons/fa';
// import { MenuItems } from './MenuItems';
// import { Button } from '../Button';
// import './Navbar.css';


function Navbar() {
    return (
        <>
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo">
                    Astronomers Anonymous
                    <GiMoonOrbit className="navbar-icon"/>
                </Link>
                <div className="menu-icon"/>
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
