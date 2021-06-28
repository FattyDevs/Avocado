import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardDeck } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import OutdoorWorkouts from "./OutdoorWorkouts";
import IndoorWorkouts from "./IndoorWorkouts";
import Image2 from "./Sport-Images/Image2.jpg";
import Image4 from "./Sport-Images/Image4.jpg";
import "./SportPage.css";


class SportPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCardOutdoor: false,
      showCardIndoor: false,
      outdoorData: "",
      displayErrMsg: false,
      inDoorData: "",
    }
  }
  displayOutdoorWorkouts = async (e) => {
    e.preventDefault();
    try {
      let outDoorResult = await axios.get("http://localhost:3010/outdoor_workouts");
      this.setState({
        showCardOutdoor: !this.showCardOutdoor,
        outdoorData: outDoorResult.data
      });
      // console.log(this.state.outdoorData);
      // console.log(this.state.showCardOutdoor);
    } catch {
      this.setState({
        errMsg: "OOPS! 404 Error This is a bad Response",
        displayErrMsg: true,
      });
    }
    console.log(this.state.showCardOutdoor);
  }

  displayIndoorWorkouts = async (e) => {
    e.preventDefault();
    try {
      let InDoorResult = await axios.get("http://localhost:3010/Indoor_workouts");
      this.setState({
        showCardIndoor: !this.showCardIndoor,
        InDoorData: InDoorResult.data
      });
      // console.log(this.state.outdoorData);
      // console.log(this.state.showCardOutdoor);
    } catch {
      this.setState({
        errMsg: "OOPS! 404 Error This is a bad Response",
        displayErrMsg: true,
      });
    }
    console.log(this.state.showCardIndoor);
  }


  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              <CardDeck className ="CardDeck">
                <Card onClick={(e) => { this.displayIndoorWorkouts(e) }} className ="CardLeft">
                  <Link to="/indoor" style={{ textDecoration: 'none', color:"white" }}>
                  <Card.Img src={Image2} alt="Card image" style={{ height:"320px"}} />
                  <Card.ImgOverlay>
                    <Card.Title className="CardTitle">
                      Indoor Workouts
                    </Card.Title>
                  </Card.ImgOverlay>
                  </Link>
                </Card>

                <Card onClick={(e) => { this.displayOutdoorWorkouts(e) }} className ="CardRight"> 
                <Link to="/outdoor" style={{ textDecoration: 'none', color:"white" }}>
                  <Card.Img src={Image4} alt="Card image" style={{ height:"320px"}}/>
                  <Card.ImgOverlay>
                    <Card.Title className="CardTitle" style={{ padding: "120px"}}>
                      Outdoor Workouts
                    </Card.Title>
                  </Card.ImgOverlay>
                  </Link>
                </Card>
              </CardDeck>
            </Route>

            <Route path="/outdoor">
              {/* <Link to="/outdoor">outdoor</Link> */}
              <h1>Hello in outdoor</h1>
              {this.state.showCardOutdoor &&
                <OutdoorWorkouts
                  displayOut={this.state.outdoorData}
                />}
            </Route>

            <Route path="/indoor" >
              <h1>Hello in indoor</h1>
              {this.state.showCardIndoor &&
                <IndoorWorkouts
                  displayIn={this.state.InDoorData}
                />}
            </Route>
          </Switch>
        </Router>

      </>
    )
      ;
  }
}
export default SportPage;