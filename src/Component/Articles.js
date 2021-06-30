import React from 'react';
import axios from 'axios';
import { Carousel, Container, Row, Col, CardColumns, InputGroup, FormControl, Card, Button, Form, Modal } from 'react-bootstrap';


class Articles extends React.Component {





  render() {
    return (

      <div>
        <Card style={{ width: '100%', marginTop: '.5rem' }} className="bg-dark text-white">
          {/* <Card.Img style={{width:'100%' ,height:'43rem',opacity:"100%"}}src="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Card image" /> */}
          <Card.ImgOverlay>
            {/* <Card.Title style={{fontSize:"3rem"}}>What are the benefits of eating healthy?</Card.Title>
    <Card.Text style={{width:'50%',backgroundColor:'black',opacity:"30%",borderRadius:"2rem",padding:"1rem",border:'1rem solid green'}}>
    <h2>1. Heart health</h2>
   <h4> Some sources report that it is possible to prevent up to 80% of premature heart disease and stroke diagnoses with lifestyle changes, such as increasing physical activity and healthful eating.</h4>
   <h2>2. Reduced cancer risk</h2>
   <h4> In a 2014 studyTrusted Source, researchers found that a diet rich in fruits reduced the risk of upper gastrointestinal tract cancers.</h4>
   <h2>3. Better mood</h2>
   <h4> In 2016, researchers found that diets with a high glycemic load may trigger increased symptoms of depression and fatigue.</h4>

   <h2>4. Weight loss</h2>
   <h4>  2018, researchers found that a diet rich in fiber and lean proteins resulted in weight loss without the need for monitoring calorie intake.</h4>
    </Card.Text> */}
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




        <Card style={{ width: '100%' }} className="bg-dark text-white">
          {/* <Card.Img id="infoImg1"src="https://images.pexels.com/photos/4069258/pexels-photo-4069258.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"  alt="pic"/> */}

          <Card.Img id="overLayIMG" src="https://cdn.crispedge.com/4cbb17.png" />
          <Card.ImgOverlay>
            <Card.Title id="infoTitle1" style={{ fontSize: "3rem", textAlign: "center" }}>WHAT ARE THE BENEFITS OF EATING HEALTHY?</Card.Title>

            <Container>
              <Row>
                <Col>

                  <Card.Text><img src="https://img.icons8.com/ios-filled/100/FFFFFF/medical-heart.png" /></Card.Text>
                </Col>
                <Col>

                  <Card.Text><img src="https://img.icons8.com/ios-filled/100/FFFFFF/lol--v1.png" /></Card.Text>
                </Col>
                <Col>

                  <Card.Text><img src="https://img.icons8.com/ios-filled/100/FFFFFF/scale.png" /></Card.Text>
                </Col>
              </Row>
              <Row id="textInfo">
                <Col >

                  <Card.Text>Heart Health</Card.Text>
                </Col>
                <Col>

                  <Card.Text>Better Mood</Card.Text>
                </Col>
                <Col>

                  <Card.Text>Weight Loss</Card.Text>
                </Col>
              </Row>
              <Row id="moreInfo">
                <Col>

                  <Card.Text> Some sources report that it is possible to prevent up to 80% of premature heart disease and stroke diagnoses with lifestyle changes, such as increasing physical activity and healthful eating</Card.Text>
                </Col>
                <Col>

                  <Card.Text>In 2016, researchers found that diets with a high glycemic load may trigger increased symptoms of depression and fatigue.</Card.Text>
                </Col>
                <Col>

                  <Card.Text>In 2018, researchers found that a diet rich in fiber and lean proteins resulted in weight loss without the need for monitoring calorie intake.</Card.Text>
                </Col>
              </Row>
            </Container>
          </Card.ImgOverlay>

          {/* <Card.Text>DAILY INSPIRATION, INFORMATION AVOCADO-FILLED FUN. FOLLOW US!</Card.Text> */}
          {/* <Card.Text style={{width:'50%'}}>
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
    </Card.Text> */}

        </Card>

        <Carousel>
  <Carousel.Item interval={4000}>
    <img 

      class="d-blockw-100"
      src="https://images.pexels.com/photos/4259140/pexels-photo-4259140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="First slide"
    />
    <Carousel.Caption style={{color:'rgba(102, 204, 0)',backgroundColor:'rgb(252, 244, 244)'}}>
      <h3 >“I have chosen to be happy because it is good for my health.” – Voltaire</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <img
      class="d-blockw-100"
      src="https://images.pexels.com/photos/4259707/pexels-photo-4259707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Second slide"
    />
    <Carousel.Caption style={{color:'rgba(102, 204, 0)',backgroundColor:'rgb(252, 244, 244)'}}>
     <h3>"Healthy moms mean healthy families." ~ Carolyn Maloney</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <img
      class="d-blockw-100"
      src="https://images.pexels.com/photos/4262010/pexels-photo-4262010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Third slide"
    />
    <Carousel.Caption style={{color:'rgba(102, 204, 0)',backgroundColor:'rgb(252, 244, 244)'}}>
    <h3>"My idea of perfect happiness is a healthy family, peace between nations, and all the critics die." ~ David Mamet</h3>

    
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>






      </div>


    )
  }
}





export default Articles;