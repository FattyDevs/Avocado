import React from 'react';
import axios from 'axios';
import ResultFood from './ResultFood';
import Articles from './Articles';
import { Carousel, Container, Row, Col,CardGroup, CardColumns,InputGroup,FormControl, Card, Button, Form, Modal } from 'react-bootstrap';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
class Food extends React.Component{

constructor(props){
super(props);
this.state={
resultOfFoodUrl:[],
showFilter:false,
show:false,


// diet:'balanced',
// cuisineType:'',
// mealType:'Dinner',
// calories:'0-5000',
}
}


// async componentDidMount(){
// // const parames={
// // q:'chicken',
// // diet:'balanced',
// // cuisineType:'Middle%20Eastern',
// // mealType:'Dinner',
// // calories:'100-1000',
// // }
// // const Food_URL=await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=d7062a52&app_key=%202ee3f43c2a46be94ecec06c2437c9de7&q=${this.state.meal}&diet=${this.state.diet}&cuisineType=${this.state.cuisineType}&mealType=${this.state.mealType}&calories=${this.state.calories}`);

//     const Food_URL=await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=d7062a52&app_key=%202ee3f43c2a46be94ecec06c2437c9de7&q=${this.state.meal}`);

//     console.log(Food_URL.data.hits[0].recipe.ingredientLines[0]);
//     this.setState({
//         resultOfFoodUrl:Food_URL.data.hits
//     })}




// openModalFilter=()=>{
//     this.setState({
//         showFilter:true,
//     })

// }
// closeModalFilter=()=>{
//     this.setState({
//         showFilter:false,
//     })
// }
searchMeal= async (event)=>{
event.preventDefault();
let data=event.target.meal.value

const Food_URL=await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=d7062a52&app_key=%202ee3f43c2a46be94ecec06c2437c9de7&q=${data}`);
this.setState({
   
    resultOfFoodUrl:Food_URL.data.hits
})
}


    render(){
        return(
            <>
             <Card  >
               
    <Card.Img style={{width:'100%' ,height:'50rem',opacity:"100%"}}src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image" />
  <Card.ImgOverlay style={{paddingTop:'20rem',width:"80%",paddingLeft:'20rem'}}>
  <Card.Title id="titleCard" style={{fontSize:'2.6rem',fontWeight:'bolder',color:'white',textShadow:"4px 4px #4cbb17"}}>Search For Recipes And Food...</Card.Title>
<Form  onSubmit ={this.searchMeal}>
  <InputGroup style={{border:'.2rem solid rgba(102, 204, 0, 0.82) '}}className="mb-3" >
    <Form.Control  placeholder="Find Recipe ..." style={{fontSize:'1.5rem',fontWeight:'bold',fontStyle:"italic"}} name='meal'/>
    {/* <Button style={{fontSize:'1.5rem',fontWeight:'bold',backgroundColor:'rgba(96,96,96,0.9)',width:'7%',height:'2rem',position:"absolute",top:"0",right:"0"}} type="submit" variant="outline-secondary" id="button-addon2"><img src="https://img.icons8.com/ios/50/ffffff/search--v1.png"/></Button> */}
    {/* <img src="https://img.icons8.com/ios/50/dddddd/search--v1.png"/> */}
    {/* <img src="https://img.icons8.com/color/48/000000/search.png"/> */}
    {/* <img  src="https://img.icons8.com/ios-filled/50/000000/search--v4.png"/> */}
  </InputGroup>
  </Form>
  </Card.ImgOverlay>
  </Card>
            {/* <Container>
                
<Row> */}
   
    <CardColumns style={{width:'75rem'}}>
    {/* <Container style={{width:'40rem'}}>
          <Row style={{width:'40rem'}}>
              <Col style={{width:'18rem'}}> */}
    {this.state.resultOfFoodUrl.map((item)=>{
    return (
    <ResultFood
    
    label={item.recipe.label}
    image={item.recipe.image}
    url={item.recipe.url}
    yield={item.recipe.yield}
    calories={item.recipe.calories}
    mealType={item.recipe.mealType}
    image={item.recipe.image}

    />
    )
})}
{/* </Col>
  </Row>
        </Container> */}
</CardColumns>
{/* 
<Modal show={this.state.showFilter} onHide={this.closeModalFilter} >

<Modal.Header closeButton>
    <Modal.Title>Update Your Book</Modal.Title>
</Modal.Header>

<Modal.Body>
    <p>ahmad</p>
    <Form onSubmit={(e) => this.props.addBookProp(e)}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Meal Name</Form.Label>
            <Form.Control type='text' placeholder="Enter Book Name" name='name' />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Book Description</Form.Label>
            <Form.Control type="text" placeholder="Description" name='description' />
        </Form.Group>
        <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Control as="select" custom name='select' onChange={this.props.UpdateSelectionStatus} style={{ width: '100%', height: '3rem', marginBottom: '1rem' }}>
                <option value=''></option>
                <option value='Life Changing'>Life Changing</option>
                <option value='Favorite Five'>Favorite Five</option>
                <option value='Reccomended To Me'>Reccomended To Me</option>
            </Form.Control>
        </Form.Group>
        <Button type="submit" variant="secondary" style={{ width: '100%' }}onClick={this.props.AddcloseModal}>Submit</Button>

    </Form>
</Modal.Body>

<Modal.Footer>
    <Button variant="secondary" onClick={this.closeModalFilter} >Close</Button>
</Modal.Footer>

</Modal>

    <Button variant="primary" onClick={this.openModalFilter}>Filter</Button> */}
{/* </Row>
        </Container> */}
        <Articles></Articles>

            </>
        )
    }
}
export default withAuth0(Food);
