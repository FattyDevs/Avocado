import React from 'react';
import { Carousel, Container, Row, Col, CardColumns, Card, Button, Form, Modal } from 'react-bootstrap';

class ResultFood extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showIngredient:false,
            caloriesNum:0,
            favDish :0
           
        }
    }
    
    
    componentWillMount(){
        let calories=parseInt(this.props.calories)/parseInt(this.props.yield)
        this.setState({
            caloriesNum:Math.ceil(calories) ,
        })
        console.log(calories)
    }
        
    favDishs=()=>{
        const AddFood = {
            label:label,
            image:image,
            url:url,
            yield:yield,
            calories:calories,
            mealType:mealType,
        }
        this.setState({
            
            favDish : this.state.favDish+1
        
        })
  console.log("this.state.favDish")
    

    }




 
    // showIngredientFunc=()=>{
    //     this.setState({
    //         showIngredient:true,
    //     })
    // }
    // hideIngredientFunc=()=>{
    //     this.setState({
    //         showIngredient:false,
    //     }) 
    // }
    
    
Contact=()=> {

    
      window.location.href = this.props.url;
    };
    
    render(){
        return(
            <>
    <Col>
    <Card   style={{ width: '25rem' }} >
  <Card.Img variant="top" src={this.props.image} onClick={this.Contact}/>
  <Card.Body>
    <Card.Title>{this.props.label}</Card.Title>
    <Container>
          <Row>
<Col><Card.Text>{this.state.caloriesNum}Cal/Serving</Card.Text></Col>
<Col><Card.Text>Serving:{this.props.yield}</Card.Text></Col>
<Col>{this.props.mealType}</Col>
<Col onClick={this.favDishs}> 💟 {this.state.favDish}</Col>
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
export default ResultFood;