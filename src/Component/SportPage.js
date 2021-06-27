import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,CardDeck} from 'react-bootstrap';
// import { Link } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   // Switch,
//   Route
// } from "react-router-dom";
import OutdoorWorkouts from "./OtdoorWorkouts";


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

<CardDeck>
  <Card onClick={this.displayIndoorWorkouts}>
    <Card.Body>
      <Card.Title>Indoor Workouts</Card.Title>
    </Card.Body>
  </Card>
  <Card onClick={this.displayOutdoorWorkouts}>
    <Card.Body>
      <Card.Title>Outdoor Workouts</Card.Title>
    </Card.Body>

  </Card>
</CardDeck>
{this.showCardOutdoor &&
    <OutdoorWorkouts
    displayOut={this.state.outdoorData}
    />
    }

{/* <Router>
  <switch>
    <Route path="sports/outdoor">
<Link to="/sports/outdoor">outdoor</Link> */}
    {/* {this.showCardOutdoor &&
    <OutdoorWorkouts
    displayOut={this.state.outdoorData}
    />
    } */}
    {/* <Route path="sports/indoor" >
    </Route>
    </Route>
  </switch>

</Router> */}

</>
    )
    ;
  }
}
export default SportPage;
