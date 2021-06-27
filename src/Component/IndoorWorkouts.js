import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardColumns } from "react-bootstrap";


class IndoorWorkouts extends React.Component{
render(){
    return (
        <>
         <CardColumns>
          {this.props.displayIn.map((item, indx) => {
              return (
                <div>
                <Card className="text-center" key={indx}>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Img src={item.image} />
                  </Card.Body>
                  <Card.Footer className="text-muted">{item.description}</Card.Footer>
                </Card>
              </div>
            )
          }
          )}
        </CardColumns>
        </>
    )
}
}
export default IndoorWorkouts;