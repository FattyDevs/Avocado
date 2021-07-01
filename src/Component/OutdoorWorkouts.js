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
      <div className="containerOutdoor">
        <CardColumns className="cardColumsOutdoor">
          {this.props.displayOut.map((item, indx) => {
             if (item.description != null && item.icon != null){
              return (
                <div>
                <Card className="text-centerOutdoor" key={indx}>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Img src={item.icon} />
                  </Card.Body>
                  <Card.Footer className="text-mutedOutdoor">{item.description}</Card.Footer>
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
