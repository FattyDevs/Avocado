import { Component } from "react"
import { NavItem } from "react-bootstrap";
import { Button } from "./Button";
import { MenuItems } from "./MenuItems"
import logo from "../imgv/Avocado_logo-removebg-preview.png";
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <img  src ={logo} className="logoo"/>
                <h1 className="navbar-logo">AVOCADO<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button className="bu">Join Us</Button>
            </nav>
        )
    }
}

export default Navbar