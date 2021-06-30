import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card,CardDeck } from "react-bootstrap";
//import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
//import Overlay from 'react-bootstrap/Overlay'
//import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import './IndoorWorkouts.css'
import Image5 from './Sport-Images/Image5.jpg'



class IndoorWorkouts extends React.Component{
render(){
    return (
        <>
         <img src={Image5} style={{ width: '1300px'}} className='imageHeader'/>
         <div className = 'container'>
         <CardDeck className='cardDeck'>
          {this.props.displayIn.map((item, indx) => {
              return (
                <div>
                <Card className="text-center" key={indx}>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Img src={item.image} className='image'/>
                  </Card.Body>
                  <Card.Footer className="text-muted" style={{ color: 'white',}}>
                    {item.description}
                    <div className='button'>
                      <a href={item.link} target="_blank"> 
                        <Button variant="outline-warning" className='ButtonWorkout'>
                          More Info
                        </Button>
                      </a>
                    </div>
                  </Card.Footer>
                </Card>
              </div>
            )
          }
          )}
        </CardDeck>
        </div>
        </>
    )
}
}
export default IndoorWorkouts;