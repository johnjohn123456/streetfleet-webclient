import React, { Component } from 'react';
import './App.css';
import NavBar from './containers/NavBar';
import HomePage from './components/HomePage';
import FleetOverview from './components/FleetOverview';
import MapView from './components/MapView';
import { Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <NavBar />
        </div>
        <Route exact path="/" component={HomePage}/>
        <Route path="/FleetOverview" component={FleetOverview}/>
        <Route path="/MapView" component={MapView}/>

      </div>
    );
  }
}

export default App;
