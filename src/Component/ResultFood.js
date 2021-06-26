import React from 'react';
import {Card} from'react-bootstrap'

class ResultFood extends React.Component{
    render(){
        return(
            <>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.image} />
  <Card.Body>
    <Card.Title>{this.props.label}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>

            </>
        )
    }
}
export default ResultFood;