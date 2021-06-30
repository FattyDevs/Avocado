import { Component } from "react"
import {Navbar, Nav}from 'react-bootstrap'
//import { Button } from "./Button";
//import { MenuItems } from "./MenuItems"
// import logo from "../imgv/Avocado_logo-removebg-preview.png";
// import './Navbar.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import '../header.css';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from '../LoginButton.js';
import LogoutButton from '../LogoutButton.js';
//import Food from '../Component/Food.js';
class HeaderNav extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            // <nav className="NavbarItems">
            //     <img  src ={logo} className="logoo"/>
            //     <h1 className="navbar-logo">AVOCADO<i className="fab fa-react"></i></h1>
            //     <div className="menu-icon" onClick={this.handleClick}>
            //         <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            //     </div>
            //     <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            //         {MenuItems.map((item, index) => {
            //             return (
            //                 <li key={index}>
            //                     <a className={item.cName} href={item.url}>
            //                     {item.title}
            //                     </a>
            //                 </li>
            //             )
            //         })}
            //     </ul>
            //     <Button className="bu">Join Us</Button>
            // </nav>
            <Nav className="NavbarItems">
                {/* <img src={logo} alt="Logo" className="logoo" /> */}
                <Navbar.Brand className="navbar-logo">AVOCADO<i className="fab fa-react"></i></Navbar.Brand>
                <Nav.Item className="itm">
                <Link className="link" to="/Home">Home</Link>
                </Nav.Item>
                {this.props.auth0.isAuthenticated ?
                    <Nav.Item className="itm">
                        <Link className="link" to="/Profile">Profile</Link>
                    </Nav.Item> : <></>}
                <Nav.Item className="itm">
                    <Link className="link" to="/SportPage">Sports</Link>
                </Nav.Item>
                <Nav.Item className="itm">
                    <Link className="link" to="/Food"  >  Food </Link>
                </Nav.Item>
                <Nav.Item className="itm">
                    <Link className="link" to="/About" >  About Us</Link>
                </Nav.Item>
                <Nav.Item className="bu">
                    {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
                </Nav.Item>
            </Nav>
        )
    }
}
export default withAuth0(HeaderNav);