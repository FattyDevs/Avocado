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
      <div className="div">
      <Nav className="text-center mt-4 mb-4" >
        <img src={logo} alt="Logo" className="logo"/>
        <Navbar.Brand className="brand">AVOCADO</Navbar.Brand>
      <Nav.Item>
        <Nav.Link className="item" to="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="item" to="/SportPage">Sports</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="item" eventKey="" >  Food </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="item" eventKey="" >  About Us</Nav.Link>
      </Nav.Item>
      <Nav.Item className="item">
        {this.props.auth0.isAuthenticated ? <LogoutButton/> : <LoginButton />}
      </Nav.Item>

      
    </Nav>
      </div>
    )
  }
}

export default withAuth0(Header);