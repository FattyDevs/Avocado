<<<<<<< HEAD
import "./App.css";
// import SportPage from "./Component/SportPage";
import BookClass from "./Component/BookClass";
function App() {
  return (
    <div className="App">
      {/* <SportPage/> */}
      <BookClass />
    </div>
  );
=======

// import './App.css';
// import SportPage from "./Component/SportPage";
// function App() {
//   return (
//     <div className="App">
// <SportPage/>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LogIn from "./LoginButton.js";
import { withAuth0 } from '@auth0/auth0-react';
import HomePage from './Component/HomePage';
import './App.css';
import SportPage from "./Component/SportPage";

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
              {this.props.auth0.isAuthenticated ? <HomePage /> : <LogIn />}

            </Route>
           
            <Route path="/SportPage">
              <div className="App">
                <SportPage />
              </div>

            </Route>
            <Route path="">

            </Route>


          </Switch>
          <Footer />

        </Router>
      </>
    )
  }
>>>>>>> 8ca23bf63e914530f5cd970db1c563b573cccfcb
}

export default withAuth0(App);

