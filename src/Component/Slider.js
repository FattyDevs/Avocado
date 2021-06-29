import React from 'react';
//import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';
import Carousel from 'react-bootstrap/Carousel';
import One from './imgv/1140-healthy-lifestyle-beliefs-behaviors.imgcache.rev.web.700.403.jpg';
import Two from './imgv/carl-barcelo-nqUHQkuVj3c-unsplash.jpg';
import Three from './imgv/john-arano-h4i9G-de7Po-unsplash.jpg';
import Four from './imgv/plate_lunch_pork_ginger_and_eggs_203768.jpg';
import Five from './imgv/Well-7-Healthy-Habits-4p-3p-2p-B_web1.jpg';
import Six from './imgv/caroline-attwood-bpPTlXWTOvg-unsplash.jpg';
import Seven from './imgv/istockphoto-843912990-640x640.jpg';
import Eight from './imgv/ola-mishchenko-VRB1LJoTZ6w-unsplash.jpg';
import Nine from './imgv/1023270_basketball-hoop-high-quality-resolution-wallpapers-sports_1920x1080_h.jpg';
import './Home.css'





class Slider extends React.Component {
    render() {
        return (
            <>
                <Carousel fade className="carousel" controls={false}>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={One}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Healthy Lifestyle</h3>
                            
                        </Carousel.Caption>
                    </Carousel.Item >
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={Two}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Healthy Food with Exersicing </h3>
                        </Carousel.Caption>
                    </Carousel.Item >
                    <Carousel.Item interval={2000}> 
                        <img
                            className="d-block w-100"
                            src={Three}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Our Application Helps You Follow the Healthy Lifestyle</h3>
                            
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={Four}
                            alt="Fourth slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={Five}
                            alt="Fifth slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={Six}
                            alt="Sixth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={Seven}
                            alt="Seventh slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={Eight}
                            alt="Eighth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={Nine}
                            alt="Ninth slide"
                        />
                    </Carousel.Item>
                </Carousel>


            </>
        )
    }
}

export default withAuth0(Slider);