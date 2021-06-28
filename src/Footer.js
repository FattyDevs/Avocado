import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './header.css';

class Footer extends React.Component {
  render() {
    return(
      <Nav className="foot" >
      <Navbar.Brand>&copy; </Navbar.Brand>
    </Nav>
    )
  }
}

export default Footer;