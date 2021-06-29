import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './header.css';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';
import Nav from 'react-bootstrap/Nav';
import logo from "./Avocado_logo-removebg-preview.png";

class Header extends React.Component {
  
  render() {
    return(
      
      <Nav  className="div">
        <img src={logo} alt="Logo" className="logo"/>
        <Navbar.Brand className="brand">AVOCADO</Navbar.Brand>
      <Nav.Item className="itm">
        <Link className="link" to="/">Home</Link>
      </Nav.Item>

      {this.props.auth0.isAuthenticated ?  
      <Nav.Item className="itm">
        <Link className="link" to="/Profile">Profile</Link>
      </Nav.Item> : <></> }
     
      <Nav.Item className="itm">
        <Link className="link" to="/SportPage">Sports</Link>
      </Nav.Item>
      <Nav.Item className="itm">
        <Link className="link"  >  Food </Link>
      </Nav.Item>
      <Nav.Item className="itm">
        <Link className="link" to="/About" >  About Us</Link>
      </Nav.Item>
      <Nav.Item className="btn">
        {this.props.auth0.isAuthenticated ? <LogoutButton/> : <LoginButton />}
      </Nav.Item>

      
    </Nav>
      
    )
  }
}

export default withAuth0(Header);