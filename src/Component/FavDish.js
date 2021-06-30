import React from 'react';
import axios from 'axios';

import { Carousel, Container, Row, Col, CardColumns, Card, Button, Form, Modal } from 'react-bootstrap';
class FavDish extends React.Component{
    componentWillMount(){
        let calories=parseInt(this.props.calories)/parseInt(this.props.yields)
        this.setState({
            caloriesNum:Math.ceil(calories) ,
        })
       
    }
    render(){
        return(
            <>
              <Col>
    <Card   style={{ width: '25rem' }} >
  <Card.Img variant="top" src={this.props.image} />
  <Card.Body>
    <Card.Title>{this.props.label}</Card.Title>
    <Container>
          <Row>
<Col><Card.Text>{this.state.caloriesNum}Cal/Serving</Card.Text></Col>
<Col><Card.Text>Serving:{this.props.yields}</Card.Text></Col>
<Col>{this.props.mealType}</Col>
<Button variant="primary" onClick={() => this.props.deletFunction(this.props.idx)} style={{ width: '100%' ,height:'2rem',backgroundColor: 'gray'}}>Delete</Button>

          </Row>
 
   
    </Container>
  </Card.Body>

  {/* <Button  variant="primary" onClick={this.Contact}></Button> */}
  
  {/* <Button variant="primary" onClick={this.showIngredientFunc}>Ingredient</Button>
  {this.state.showIngredient && <Card.Footer>
      {this.props.ingredientLines.map((item)=>{
          return(
           <li> {item} </li>   
          )
  })}
  <Button variant="primary" onClick={this.hideIngredientFunc}>close</Button>
  </Card.Footer>} */}
</Card>
</Col>
            </>
        )
    }
}
export default FavDish ;