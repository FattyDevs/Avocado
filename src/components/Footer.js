import { Component } from "react"
// import '../header.css';
import './Footer.css';
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";


class Footer extends Component {
    render() {
        return (
            <>
                {/* <div className="foot">
                    <p className="par">&copy; 2021 - Fatty Devs  </p>

                    <div className="div2">
                        <h6>Contact Us :</h6>
                        <SiGmail /> fattydevs@gmail.com -
                        <AiFillGithub /> github.com/FattyDevs -
                        <FaFacebook /> facebook.com/fatty.Devs -
                        <HiPhone /> +962 7 001 0001 -
                        <MdLocationOn /> Amman - Jordan .
                    </div>
                </div> */}
                <div className="footer">
                <div className="footo">
                <div className="row">
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Get Help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Pages</h4>
                        <ul>
                            <li><a href="#">Sport Page</a></li>
                            <li><a href="#">Food Page</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Follow Us</h4>
                        <div class="social-links">
                        {/* <a href="#"><li className="fab fa-facebook-f"></li></a>
                        <a href="#"><li className="fab fa-twitter"></li></a>
                        <a href="#"><li className="fab fa-instagram"></li></a>
                        <a href="#"><li className="fab fa-facebook"></li></a> */}
                            <ul>
                           <li> <SiGmail /> fattydevs@gmail.com -        </li>
                           <li> <AiFillGithub /> github.com/FattyDevs -  </li>
                           <li> <FaFacebook /> facebook.com/fatty.Devs - </li>
                           <li> <MdLocationOn /> Amman - Jordan .        </li>
                           </ul>

                        {/* <SiGmail /> fattydevs@gmail.com - 
                        <AiFillGithub /> github.com/FattyDevs -
                        <FaFacebook /> facebook.com/fatty.Devs -
                        <HiPhone /> +962 7 001 0001 -
                        <MdLocationOn /> Amman - Jordan . */}

                        </div>
                        <ul>
                            <li><a href="#"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            </>

        )
    }
}

export default Footer




