import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import { AiFillGithub} from "react-icons/ai";
import {  SiGmail} from "react-icons/si";
import {  MdLocationOn} from "react-icons/md";
import {  HiPhone } from "react-icons/hi";
import {  FaFacebook } from "react-icons/fa";


class Footer extends React.Component {
  render() {
    return (
      <>
      <div className="foot">
     
        
    
        

      <div className="div2">
        <h6>Contact Us :</h6>
        <SiGmail/> fattydevs@gmail.com - 
        
         <AiFillGithub /> github.com/FattyDevs -
        
         <FaFacebook /> facebook.com/fatty.Devs -
        
         <HiPhone /> +962 7 001 0001 -
        
         <MdLocationOn /> Amman - Jordan .
         <p className="par">&copy; 2021 - Fatty Devs  </p>

      </div>
      </div>
      </>

    )
  }
}

export default Footer;