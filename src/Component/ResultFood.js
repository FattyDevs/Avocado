import React from 'react';
import axios from 'axios';
import FavDish from './FavDish';
import { Carousel, Container, Row, Col, CardColumns, Card, Button, Form, Modal } from 'react-bootstrap';

class ResultFood extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showIngredient:false,
            caloriesNum:0,
            favFood:[]
           
        }
    }
    
    
    componentWillMount(){
        let calories=parseInt(this.props.calories)/parseInt(this.props.yield)
        this.setState({
            caloriesNum:Math.ceil(calories) ,
        })
        console.log(calories)
    }
        
    favDishs= async ()=>{
        
        const AddFood = {
            email:'asailik1993@gmail.com',
            label:this.props.label,
            image:this.props.image,
            url:this.props.url,
            yields:this.props.yield,
            calories:this.props.calories,
            mealType:this.props.mealType,
        }
        // console.log(AddFood) 
        const favFood= await axios.post(`http://localhost:3010/addFood`,AddFood)

        this.setState({
            favFood:favFood.data
        })
  console.log(this.state.favFood)
    

    }
    deletFunction = async (index) => {
        
        const ownerEmail = {
          email: 'asilik!993@gmail.com'
        }
        let newFavAfterdelet = await axios.delete(`http://localhost:3010/deleteFood/${index}`, { params: ownerEmail })
        this.setState({
            favFood: newFavAfterdelet.data
        })
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
    // getting= async ()=>{

    //     const getFood= await axios.get(`http://localhost:3010/getfood?email=asailik1993@gmail.com`) 
    //     console.log(getFood.data)
    // }
    
Contact=()=> {
      window.location.href = this.props.url;
    };
    
    render(){
        return(
            <>
    <CardColumns>
    <Container>
          <Row>
    {this.state.favFood.map((item,idx)=>{
    return (
    <FavDish
    deletFunction={this.deletFunction}
    label={item.label}
    image={item.image}
    url={item.url}
    yields={item.yields}
    calories={item.calories}
    mealType={item.mealType}
    idx={idx}

    />
    )
})}
  </Row>
</Container>
</CardColumns>
                {/* <Button onClick={this.getting} variant="outline-secondary" id="button-n2">get</Button> */}

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
<Col onClick={this.favDishs}> 💟 </Col>
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