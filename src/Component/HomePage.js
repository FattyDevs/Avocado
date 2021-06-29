import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import './Home.css'
//import axios from 'axios';
import Slider from './Slider.js';

class Home extends React.Component{

   

    render(){
        return(
            <>
            <Slider />
            </>
        )
    }
}

export default withAuth0(Home);