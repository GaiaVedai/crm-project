import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Client from './components/ClientInfo';


class App extends Component {
  render() {

    return (
      <Router>
        <div className="app">
          <div className="container">
          <Navbar />
          {/* <Route path="/clients" exact component={} /> */}

            {/* <Client /> */}
          </div>

          {/* Routes go here v */}
          {/* <Route path="/" component={Navbar} /> */}


          {/* <Route path="/client" exact component={Client} />
                <Route path="/about" exact render={() => <About items={Object.keys(state)} />} />
                <Route path="/directory/:fentities" exact render={({ match }) => <Fentities match={match} state={state} />} /> */}

          {/* Routes go here ^ */}
          {/* </div> */}
        </div>
      </Router>
    );
  }
}

export default App;
