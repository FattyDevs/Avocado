import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,CardDeck} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import OutdoorWorkouts from "./OtdoorWorkouts";
// import { Button } from "bootstrap";


class SportPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      showCardOutdoor:false,
      outdoorData:"",
      displayErrMsg: false

    }
  }
  displayOutdoorWorkouts= async (e)=>{
    e.preventDefault();
    try{
  let outDoorResult= await axios.get("http://localhost:3010/outdoor_workouts");
  this.setState({
    showCardOutdoor:!this.showCardOutdoor,
    outdoorData:outDoorResult.data
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
  render() {
    return (
<>
<Router>
  <Switch>
  <Route exact path="/">
<CardDeck>
  <Card onClick={(e)=>{this.displayIndoorWorkouts(e)}}>
    <Card.Body>
      <Card.Title>Indoor Workouts</Card.Title>
    </Card.Body>
  </Card>
  <Card onClick={(e)=>this.displayOutdoorWorkouts(e)}>
    <Card.Body>
    <Link to="/outdoor" style={{textDecoration: 'none'}}>Outdoor Workouts</Link>
      {/* <Card.Title>Outdoor Workouts</Card.Title> */}
    </Card.Body>

  </Card>
</CardDeck>
</Route>
{/* {this.state.showCardOutdoor &&
    <OutdoorWorkouts
    displayOut={this.state.outdoorData}
    />
    } */}


  
    
    <Route path="/outdoor">
{/* <Link to="/outdoor">outdoor</Link> */}
<h1>Hello in outdoor</h1>
    {this.state.showCardOutdoor &&
    <OutdoorWorkouts
    displayOut={this.state.outdoorData}
    />
    } 
    </Route>
    <Route path="/indoor" >
    </Route>
    
  </Switch>

</Router>

</>
    )
    ;
  }
}
export default SportPage;
