import React from "react";
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Card,
    Button,
  } from "react-bootstrap";
  class ChoosenClass extends React.Component{
render(){
    return(
        <>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Choosen Class</Card.Title>
              <Card.Text>
                {this.props.name}
              </Card.Text>
              <Card.Text>
                {this.props.email}
              </Card.Text>
              <Card.Text>
          {this.props.class}
              </Card.Text>
              <Button variant="primary" onClick={()=>this.props.deleteClass(this.props.idx)}>Delete</Button>
            </Card.Body>
      </Card>
        </>
)
}
  }
  export default ChoosenClass;
