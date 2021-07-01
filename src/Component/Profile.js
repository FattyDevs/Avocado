import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import UserInfoForm from './UserInfoForm';
import axios from 'axios';
import { Carousel, Container, Row, Col, CardColumns, Card, Button, Form, Modal } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import './Home.css';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            users: [],
            food:0,
        }
    }
    hideModal = (event) => {
        event.preventDefault();
        this.setState({
            show: false,
        });
        // console.log("hide modal");
    }
    componentDidMount = () => {
        this.checkUserAuth();
    }
    checkUserAuth = async () => {
        const dataURL = await axios.get(`http://localhost:3010/`);
        const data = dataURL.data;
        console.log(data);
        this.setState({
            users: data,
        })
        const { user } = this.props.auth0;
        const email = user.email;
        let x = this.state.users.filter((user) => { return (email === user.email) });
        console.log(x);
        if (x.length !== 0) {
            this.setState({
                show: false,
            });
            console.log("defined");
        } else {
            // console.log(this.state.users);  
            this.setState({
                show: true,
            })
            // console.log("undefined user");    
        }
    }
    saveUsersInfo = async (event) => {
        event.preventDefault();
        const { user } = this.props.auth0;
        let newUser = {
            name: user.name,
            email: user.email,
            age: event.target.age.value,
            height: event.target.height.value,
            weight: event.target.weight.value,
            favSport: event.target.favSport.value,
        }
        console.log(`data from form ${newUser}`);
        console.log(newUser);
        let addNewUser = await axios.post(`http://localhost:3010/newUser`, newUser);
        // this.state.users.push(addNewUser);
        this.setState({
            users: addNewUser.data,
        })
        console.log(addNewUser);
        console.log(this.state.users);
        // console.log('after',this.state.food);
    }
    deletFunction = async (event) => {
        event.preventDefault();
        const index=event.target.value;
        // let newFoodArr=this.state.food.filter((food)=> food.index !== index);
        const { user } = this.props.auth0;
        const ownerEmail = {
          email: user.email
        }
        console.log(ownerEmail)
        console.log('befor',this.state.food)
        let newFavAfterdelet = await axios.delete(`http://localhost:3010/deleteFood/${index}`, { params: ownerEmail })
        this.setState({
            // users: newFavAfterdelet.data
            food:newFavAfterdelet.data.foods,
        })
        console.log(newFavAfterdelet.data)
        console.log('after',this.state.food)
        
      }
    render() {
        const { user } = this.props.auth0;
        return (
            <div className="p-card">
                <UserInfoForm show={this.state.show} hide={this.hideModal} saveUser={this.saveUsersInfo} />
                <Card  className="procard">
                    <Card.Body>
                        <Image src={user.picture} roundedCircle />
                        <Card.Title>{user.name}</Card.Title>
                        {/* <Card.Subtitle >{user.email}</Card.Subtitle> */}
                        {this.state.users.find(obj=>obj.email == user.email)  && 
                        <div className="p-card">
                            <p>Age : {this.state.users.find(obj=>obj.email == user.email).age} </p>
                            <p>Height : {this.state.users.find(obj=>obj.email == user.email).height}</p>
                            <p>Weight : {this.state.users.find(obj=>obj.email == user.email).weight}</p>
                            <p>Favorite Sport: {this.state.users.find(obj=>obj.email == user.email).favSport}</p>
                            <p>Booked For: {this.state.users.find(obj=>obj.email == user.email).clss
                            // .map((book)=>{return book.clss})
                            }</p>
                            </div>}
                    </Card.Body>
                </Card>
                <CardColumns>
                            {(this.state.food==0)?
                                                   this.state.users.find(obj => obj.email == user.email) && this.state.users.find(obj => obj.email == user.email).foods
                                                    .map((item,idx) => { 
                                                        return (
                                                            <Col>
                                                                <Card id="searchFoodCard"  >
                                                                    <Card.Img id="image" variant="top" src={item.image}  />
                                                                    <Card.Body id="cardBody">
                                                                        <Card.Title class="title">{item.label}</Card.Title>
                                                                        <Card.Text id="deatalis"> Click On The Picture For More Deatails</Card.Text>
                                                                        <Card.Text class="calories">346<img src="https://img.icons8.com/emoji/33/000000/fire.png" /></Card.Text>
                                                                   <Button variant="secondary" value={idx} onClick={this.deletFunction} className="in">Delete</Button>
                                                                    </Card.Body>
                                                                </Card>
                                                        </Col>
                            )
                        }):this.state.food.map((item,idx)=>{
                                    return (
                                        <Col>
                                            <Card id="searchFoodCard"  >
                                                <Card.Img id="image" variant="top" src={item.image}  />
                                                <Card.Body id="cardBody">
                                                    <Card.Title class="title">{item.label}</Card.Title>
                                                    <Card.Text id="deatalis"> Click On The Picture For More Deatails</Card.Text>
                                                    <Card.Text class="calories">346<img src="https://img.icons8.com/emoji/33/000000/fire.png" /></Card.Text>
                                               <Button variant="secondary" value={idx} onClick={this.deletFunction} className="in">Delete</Button>
                                                </Card.Body>
                                            </Card>
                                    </Col> 
                        )})
                            }
                </CardColumns >
            </div >
        )
    }
}
export default withAuth0(Profile);