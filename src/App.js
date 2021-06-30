
// export default App;
import React from 'react';
import Header from './components/Navbar';
import Footer from './Footer';
import { withAuth0 } from '@auth0/auth0-react';
import HomePage from './Component/HomePage';
import './App.css';
import SportPage from "./Component/SportPage";
import Profile from './Component/Profile';
import About from './Component/About.js';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends React.Component {

  render() {

    return (
      <>
        <Router>

          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage/>
            
            </Route>

            <Route path="/SportPage">
              <div className="App">
                <SportPage />
              </div>

            </Route>
            <Route path="/Home">
              <HomePage />
            </Route>

            <Route path="/About">
              <About />
            </Route>
            <Route path="/Profile">
              {this.props.auth0.isAuthenticated ? <Profile /> : <HomePage />} 
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