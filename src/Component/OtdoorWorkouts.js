import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card,CardColumns } from "react-bootstrap";

class OutdoorWorkouts extends React.Component {

  render() {
    return (
      <>
     <CardColumns>
        {this.props.displayOut.map((item,indx) => {
          return (
            <Card className="text-center" key={indx}>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Img src={item.icon}/>
              {/* {
            item.imagesArr.find({url:url})
<Card.Img variant="top" src={item.} />
              } */}
            </Card.Body>
            <Card.Footer className="text-muted">{item.description}</Card.Footer>
          </Card>
          )
            }
        )}
        </CardColumns>
      </>
    )
 
  }
}
export default OutdoorWorkouts;
