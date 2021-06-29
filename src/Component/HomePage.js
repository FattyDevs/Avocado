import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import './Home.css'
//import axios from 'axios';
// import Slider from './Slider.js';

import Slider from '../components/Slider.js';
// import Test from './Test.js';
import Info from "../components/InfoSection";

class Home extends React.Component{

   

    render(){
        return(
            <>
            <Slider />
            <Info />
            </>
        )
    }
}

export default withAuth0(Home);