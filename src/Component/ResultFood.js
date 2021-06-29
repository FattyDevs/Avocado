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
            favFood:[],
            setIsShown:false,

           
        }
    }

    showHover=()=>{
        this.setState({
            setIsShown :true
        })
    }

    hideHover=()=>{
        this.setState({
            setIsShown :false
        })
    }
    

     changeBackground=(e)=> {
        e.target.style.background = 'red';
      }
    

      
     notchangeBackground=(e)=> {
        e.target.style.background = 'green';
      }


       getRandomArbitrary=(min, max)=> {
        return Math.floor(Math.random() * (max - min) + min) 
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
        
    {/* <CardColumns>
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
</CardColumns> */}
                {/* <Button onClick={this.getting}  id="button-n2">get</Button> */}

    <Col style={{width:'80px'}}>
    <Card id="searchFoodCard"  >
     
  <Card.Img  id="image" variant="top" src={this.props.image} onClick={this.Contact} />
  
  <Card.Body id="cardBody">

    <Card.Title class="title">{this.props.label}</Card.Title>
    <Card.Text id="deatalis"> Click On The Picture For More Deatails</Card.Text>
    {/* <Container> */}
          {/* <Row> */}
<Card.Text class="calories">{this.state.caloriesNum}<img src="https://img.icons8.com/emoji/33/000000/fire.png"/></Card.Text>
{/* <Col><Card.Text id="yield">Serving:{this.props.yield}</Card.Text></Col> */}
{/* <Col  id="mealType">{this.props.mealType}</Col> */}

 <Card.Text>
     <p> <img src="https://img.icons8.com/material-outlined/20/000000/visible--v1.png"/>{this. getRandomArbitrary(10,30)} <img src="https://img.icons8.com/ios-glyphs/20/000000/filled-like.png"/>{this. getRandomArbitrary(0,10)} <img id ="buttonFav" data-toggle="tooltip" data-placement="right" title="Add To Favorite"onClick={this.favDishs}  src="https://img.icons8.com/ios-glyphs/25/fa314a/filled-like.png"/> </p> </Card.Text>
{/* <Button id ="buttonMore" variant="outline-secondary" onClick={this.Contact}>More..</Button> */}
{/* <Button id ="buttonFav" variant="outline-secondary" onClick={this.favDishs}>
    <img onClick={this.favDishs} id ="buttonFav" src="https://img.icons8.com/ios-glyphs/30/fa314a/filled-like.png"/> 
    </Button> */}
{/* <Card.Text>
    
    <img id ="buttonFav" data-toggle="tooltip" data-placement="right" title="Add To Favorite"onClick={this.favDishs}  src="https://img.icons8.com/ios-glyphs/40/fa314a/filled-like.png"/>
    <p id="hovering"> hii 
    </p>
    </Card.Text> */}
{/* <Col id="favClick"onClick={this.favDishs}></Col> */}
          {/* </Row> */}
 
   
    {/* </Container> */}
  </Card.Body>
  </Card>
</Col>















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


            </>
        )
    }
}























export default ResultFood;