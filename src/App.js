
// export default App;
import React from 'react';
import Header from './components/Navbar';
import Footer from './Footer';
import { withAuth0 } from '@auth0/auth0-react';
import HomePage from './Component/HomePage.js';
import './App.css';
import SportPage from "./Component/SportPage.js";
import Profile from './Component/Profile.js';
import About from './Component/About.js';
import Food from './Component/Food.js';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import { NavbarBrand } from 'react-bootstrap';
import Navbar from './components/Navbar';


class App extends React.Component {

  render() {

    return (
      <>
        <Router>

          <Navbar />
          <Switch>
            {/* <Route exact path="/">
              <HomePage />
            
            </Route> */}
            {this.props.auth0.isAuthenticated ? 
             <Route exact path="/">
             <Profile />
           
           </Route>:
             <Route exact path="/">
             <HomePage />
           
           </Route>
            }
             

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
          <Footer className='footerMain' />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
