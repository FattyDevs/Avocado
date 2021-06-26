import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,CardDeck} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import OutdoorWorkouts from "./OtdoorWorkouts";


class SportPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      showCardOutdoor:false

    }
  }
  displayOutdoorWorkouts=()=>{
    this.setState({
      showCardOutdoor:!this.showCardOutdoor
    })
// let outDoorData=await axios.get("");
let outDoorData=outDoorData.data;
this.setState({
  data:outDoorData
})
    // console.log(this.state.showCardOutdoor);
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
<Router>
  <switch>
    <Route path="sports/outdoor">
    {this.showCardOutdoor &&
    <OutdoorWorkouts
    displayOut={this.displayOutdoorWorkouts}
    />
    }
    </Route>
  </switch>

</Router>

</>
    )
    ;
  }
}
export default SportPage;
