import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/Navbar';
import Clients from './components/Clients/Clients';
import Data from './data.json';


class App extends Component {
  constructor() {
    super()
    this.state = Data
  }
  render() {

    return (
      <Router>
        <div className="app">
          <div className="container">
          <Navbar />
          <Route path="/clients" exact render={()=><Clients data={Data}/>} />
          {/* <Route path="/Actions" exact render={()=><Actions data={Data}/>} /> */}

            {/* <Client /> */}
          </div>

          {/* Routes go here v */}


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
