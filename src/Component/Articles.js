import React from 'react';
import axios from 'axios';
import { Carousel, Container, Row, Col, CardColumns,InputGroup,FormControl, Card, Button, Form, Modal } from 'react-bootstrap';


class Articles extends React.Component{

    

   
  
render(){
    return(

    <div>
<Card style={{width:'100%',marginTop:'.5rem'}}className="bg-dark text-white">
  <Card.Img style={{width:'100%' ,height:'43rem',opacity:"100%"}}src="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title style={{fontSize:"3rem"}}>What are the benefits of eating healthy?</Card.Title>
    <Card.Text style={{width:'50%',backgroundColor:'black',opacity:"30%",borderRadius:"2rem",padding:"1rem",border:'1rem solid green'}}>
    <h2>1. Heart health</h2>
   <h4> Some sources report that it is possible to prevent up to 80% of premature heart disease and stroke diagnoses with lifestyle changes, such as increasing physical activity and healthful eating.</h4>
   <h2>2. Reduced cancer risk</h2>
   <h4> In a 2014 studyTrusted Source, researchers found that a diet rich in fruits reduced the risk of upper gastrointestinal tract cancers.</h4>
   <h2>3. Better mood</h2>
   <h4> In 2016, researchers found that diets with a high glycemic load may trigger increased symptoms of depression and fatigue.</h4>

   <h2>4. Weight loss</h2>
   <h4>  2018, researchers found that a diet rich in fiber and lean proteins resulted in weight loss without the need for monitoring calorie intake.</h4>
    </Card.Text>
    {/* <Card.Text style={{width:'50%',backgroundColor:'black',opacity:"30%"}}>
    <h2>2. Reduced cancer risk</h2>
   <h4> In a 2014 studyTrusted Source, researchers found that a diet rich in fruits reduced the risk of upper gastrointestinal tract cancers.</h4>
    </Card.Text>
    <Card.Text style={{width:'50%',backgroundColor:'black',opacity:"30%"}}>
    <h2>3. Better mood</h2>
   <h4> In 2016, researchers found that diets with a high glycemic load may trigger increased symptoms of depression and fatigue.</h4>
    </Card.Text>
    <Card.Text style={{width:'50%',backgroundColor:'black',opacity:"30%"}}>
    <h2>4. Weight loss</h2>
   <h4>  2018, researchers found that a diet rich in fiber and lean proteins resulted in weight loss without the need for monitoring calorie intake.</h4>
    </Card.Text> */}
    
  </Card.ImgOverlay>
</Card>
        



<Card style={{width:'100%'}}className="bg-dark text-white">
  <Card.Img style={{width:'100%' ,height:'50rem',opacity:"70%"}}src="https://images.pexels.com/photos/4069258/pexels-photo-4069258.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"  alt="pic"/>
  <Card.ImgOverlay>
    <Card.Title style={{fontSize:"3rem",textAlign:"center"}}>What are the benefits of eating healthy?</Card.Title>
    <Card.Text style={{width:'50%'}}>
    <h2>1. Heart health</h2>
   <h4> Some sources report that it is possible to prevent up to 80% of premature heart disease and stroke diagnoses with lifestyle changes, such as increasing physical activity and healthful eating.</h4>
    </Card.Text>
    <Card.Text style={{width:'50%'}}>
    <h2>2. Reduced cancer risk</h2>
   <h4> In a 2014 studyTrusted Source, researchers found that a diet rich in fruits reduced the risk of upper gastrointestinal tract cancers.</h4>
    </Card.Text>
    <Card.Text style={{width:'50%'}}>
    <h2>3. Better mood</h2>
   <h4> In 2016, researchers found that diets with a high glycemic load may trigger increased symptoms of depression and fatigue.</h4>
    </Card.Text>
    <Card.Text style={{width:'50%'}}>
    <h2>4. Weight loss</h2>
   <h4>  2018, researchers found that a diet rich in fiber and lean proteins resulted in weight loss without the need for monitoring calorie intake.</h4>
    </Card.Text>
    
  </Card.ImgOverlay>
</Card>
    </div>


    )
}
}





export default Articles ;