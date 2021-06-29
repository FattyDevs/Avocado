import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardColumns } from "react-bootstrap";
import CardGroup from 'react-bootstrap/CardGroup'
import './OutdoorWorkouts.css'
import Image7 from './Sport-Images/Image7.jpg'

class OutdoorWorkouts extends React.Component {

  render() {
    return (
      <>
      <img src={Image7} style={{ width: '100%'}} className='imageHeader'/>
      <div className="container2">
        <CardColumns className="cardColums">
          {this.props.displayOut.map((item, indx) => {
             if (item.description != null && item.icon != null){
              return (
                <div>
                <Card className="text-center2" key={indx}>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Img src={item.icon} />
                  </Card.Body>
                  <Card.Footer className="text-muted2">{item.description}</Card.Footer>
                </Card>
              </div>
            )
              }
          }
          )}
        </CardColumns>
        </div>
      </>
    )

  }
}
export default OutdoorWorkouts;
