import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './header.css';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';

class Header extends React.Component {
  
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>AVOCADO</Navbar.Brand>
          <Link to="/">Home</Link>
          <Link to="/profile">Sports</Link>
          <Link to="">Food</Link>
          <Link to="">About Us</Link>
         

         {this.props.auth0.isAuthenticated ? <LogoutButton/> : <LoginButton />}
        
      </Navbar>
    )
  }
}

export default withAuth0(Header);