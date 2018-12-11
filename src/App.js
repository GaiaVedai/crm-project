import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/Navbar';
import Clients from './components/Clients/Clients';
import Actions from './components/Actions/Actions';
import Data from './data.json';


class App extends Component {
  constructor() {
    super()
    this.state = {
      data: Data
  }
}

  updateClientDetails = (newState) => {
    this.setState ({data:newState})
  } 

  render() {

    return (
      <Router>
        <div className="app">
          <div className="container">
          <Navbar />
          <Route path="/clients" exact render={()=><Clients data={this.state.data} updateClientDetails={this.updateClientDetails}/>} />
          <Route path="/Actions" exact render={()=><Actions clients={this.state.data}/>} />

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
