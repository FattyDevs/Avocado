import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardColumns } from "react-bootstrap";
import CardGroup from 'react-bootstrap/CardGroup';

class OutdoorWorkouts extends React.Component {

  render() {
    return (
      <>
        <CardColumns>
          {this.props.displayOut.map((item, indx) => {
             if (item.description != null && item.icon != null){
              return (
                <div>
                <Card className="text-center" key={indx}>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Img src={item.icon} />
                  </Card.Body>
                  <Card.Footer className="text-muted">{item.description}</Card.Footer>
                </Card>
              </div>
            )
              }
          }
          )}
        </CardColumns>
      </>
    )

  }
}
export default OutdoorWorkouts;
