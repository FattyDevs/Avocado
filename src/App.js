
// export default App;
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { withAuth0 } from '@auth0/auth0-react';
import HomePage from './Component/HomePage.js';
import './App.css';
import SportPage from "./Component/SportPage.js";
import Profile from './Component/Profile.js';
import About from './Component/About.js';
import Food from './Component/Food.js';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";


class App extends React.Component {

  render() {

    return (
      <>
        <Router>

          <Header />
          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated ? <Profile /> : <HomePage />}

            </Route>

            <Route path="/SportPage">
              <div className="App">
                <SportPage />
              </div>

            </Route>
            <Route path="/Home">
              <HomePage />
            </Route>

            <Route path="/Food">
             
              <Food />
              
              
            </Route>

            <Route path="/About">
              <About />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
           

          </Switch>
          <Footer />

        </Router>
      </>
    )
  }
}

export default withAuth0(App);
