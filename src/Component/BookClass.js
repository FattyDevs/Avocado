import React from "react";
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { withAuth0 } from '@auth0/auth0-react';
import ChoosenClass from "./ChooesnClass";


import { FcClock, FcCalendar, FcMoneyTransfer } from "react-icons/fc";
import {
  Card,
  CardDeck,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Image1 from "./BookClass-Images/with-family.jpg";
import Image2 from "./BookClass-Images/begginers.jpg";
import Image3 from "./BookClass-Images/master.jpg";
import ModalBookForm from "./ModalBookForm";
const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 5,
    }}
  />
);
class BookClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      data:[]
      // closeModal: false,
    };
  }
  displayModalForm = () => {
 this.setState({
   showModal:true
 })
    console.log("show is ", this.state.showModal);
  };
  closeModalForm = () => {
    // e.preventDefault();
  this.setState({
    showModal:false
  })
    console.log("close is ", this.state.showModal);
  };
  getData=(event)=>{
    event.preventDefault();
    // const { user } = this.props.auth0;
    const classInfo = {
      name: event.target.name.value,
      email:event.target.email.value,
      clsses:event.target.class.value
    }
    console.log(classInfo);
    let url=`http://localhost:3010/sportClass`;
    axios.post(url,classInfo)
    .then((result)=>{
      this.setState({
        data:result.data,
        
      })
      console.log(this.state.data);
    });
  }
  deletFunction = async (index) => {
    const ownerEmail = {
      email: 'asilik!993@gmail.com'
    }
    let newClassAfterDelete = await axios.delete(`http://localhost:3010/deletesport/${index}`, { params: ownerEmail })
    this.setState({
        data: newClassAfterDelete.data
    })
  }
  render() {
    return (
      <>
        <ColoredLine color="#39A6A3" />
        <br />
        <h1 className="BookClass-title"> Book an Online Class </h1>
        <br />
        <p>
          Of course you can learn to be active with our short courses in Jordan
        </p>
        <br /> <br />
        {/* <ColoredLine color="#A3A847" /> */}
        <CardDeck style={{ height: "400px" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Image1} style={{ height: "600px" }} />
            <Card.Body>
              <Card.Title>Personal with Family</Card.Title>
              <Card.Text>
                While we're all leading busy lives, it can be hard to fit in
                family time, let alone time to exercise. Instead of trying to
                juggle the two, why not merge them together?
              </Card.Text>
              <Card.Body>
                <Button onClick={() => this.setState({ showModal: true })}>
                  <FcCalendar /> Book Now
                </Button>
              </Card.Body>
            </Card.Body>
            <Accordion defaultActiveKey="0">
              <Accordion.Toggle as={Card.Header} eventKey="1">
                More Info
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    {" "}
                    Tue 22 Jun 2021- Tue 20 Jul 2021
                  </ListGroupItem>
                  <ListGroupItem>
                    {" "}
                    <FcClock /> 9:30am - 10:30am (UTC+10:00)
                  </ListGroupItem>
                  <ListGroupItem>
                    <FcMoneyTransfer /> 40 JD
                  </ListGroupItem>
                </ListGroup>
              </Accordion.Collapse>
            </Accordion>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Image2} style={{ height: "600px" }} />
            <Card.Body>
              <Card.Title>Fit Beginners</Card.Title>
              <Card.Text>
                Are you an intermediate runner looking to optimize your
                performance? Have you just begun your venture into running, and
                are after new ways to build up your technique?
              </Card.Text>
              <Card.Body>
                <Button onClick={() => this.setState({ showModal: true })}>
                  <FcCalendar /> Book Now
                </Button>
              </Card.Body>
            </Card.Body>
            <Accordion defaultActiveKey="0">
              <Accordion.Toggle as={Card.Header} eventKey="1">
                More Info
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    {" "}
                    Sat 03 Jul 2021-Sat 31 Jul 2021
                  </ListGroupItem>
                  <ListGroupItem>
                    <FcClock /> 6:00pm - 7:00pm (UTC+10:00)
                  </ListGroupItem>
                  <ListGroupItem>
                    <FcMoneyTransfer /> 30 JD
                  </ListGroupItem>
                </ListGroup>
              </Accordion.Collapse>
            </Accordion>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Image3} style={{ height: "600px" }} />
            <Card.Body>
              <Card.Title>Fit Master</Card.Title>
              <Card.Text>
                Join to start finding fresh inspiration to improve your
                coaching. Get immediate access to try our drills library and use
                our online sketching and professional planning tools to help you
                coach with confidence.
              </Card.Text>
              <Card.Body>
                <Button onClick={() => this.setState({ showModal: true })}>
                  {" "}
                  <FcCalendar /> Book Now
                </Button>
              </Card.Body>
            </Card.Body>
            <Accordion defaultActiveKey="0">
              <Accordion.Toggle as={Card.Header} eventKey="1">
                More Info
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    {" "}
                    Wed 21 Jul 2021- Wed 18 Aug 2021
                  </ListGroupItem>
                  <ListGroupItem>
                    {" "}
                    <FcClock />
                    7:00pm - 8:00pm (UTC+10:00)
                  </ListGroupItem>
                  <ListGroupItem>
                    <FcMoneyTransfer /> 35 JD
                  </ListGroupItem>
                </ListGroup>
              </Accordion.Collapse>
            </Accordion>
          </Card>
        </CardDeck>
        {/* {this.state.showModal && ( */}
          <ModalBookForm
            flag={this.state.showModal}
            close={this.closeModalForm}
            display={this.displayModalForm}
            getData={this.getData}
          />
        {/* // )}
        // {console.log(this.state.showModal)} */}
{
  this.state.data.map((item,idx)=>{
    return(
      <ChoosenClass
      name={item.name}
      email={item.email}
      class={item.clsses}
      idx={idx}
      deleteClass={this.deletFunction}
      />
    )
  })
}
  
      </>
    );
  }
}
export default withAuth0(BookClass);
