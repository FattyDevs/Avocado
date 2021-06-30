import React from 'react';
//import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';
import Carousel from 'react-bootstrap/Carousel';
//import '../header.css'
import './Slider.css'

import One from '../imgv/1.jpg';
import Two from '../imgv/2.jpg';
import Three from '../imgv/3.jpg'
import Four from '../imgv/4.jpg'
import Five from '../imgv/5.jpg';
import Six from '../imgv/6.jpg';
import Seven from '../imgv/7.jpg'


class Slider extends React.Component {
    render() {
        return (
            <>
                <Carousel fade className="slider" controls={false}>
                    <Carousel.Item interval={2000}>
                    
                        <img
                            className="d-block w-100"
                            src={Two}
                            alt="First slide"
                            // width="200px"
                            height="500px"
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={Three}
                            height="500px"
                        />


                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={One}
                            alt="Third slide"
                            height="500px"
                        />

                    </Carousel.Item>

                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={Four}
                            alt="Fourth slide"
                            height="500px"
                        />
                    </Carousel.Item>

                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={Five}
                            alt="Fifth slide"
                            height="500px"
                        />
                    </Carousel.Item>

                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={Six}
                            alt="Sixth slide"
                            height="500px"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={Seven}
                            alt="Seventh slide"
                            height="500px"
                        />
                    </Carousel.Item>
                    {/* <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../imgv/plate_lunch_pork_ginger_and_eggs_203768.jpg"
                            alt="Eighth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../imgv/swimming_figures_hd_picture_168203.jpg"
                            alt="Ninth slide"
                        />
                    </Carousel.Item> */}
                </Carousel>


            </>
        )
    }
}

export default withAuth0(Slider);

