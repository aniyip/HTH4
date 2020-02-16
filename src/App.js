import Tour from './Tour.js';
import React from 'react';
import Map from "./Map.js";
import UI from "./UI.js";
import './App.css';

class App extends React.Component {

    state = {
      variable1: 1,
      currentLocation: -1,
      isTraveling: false
    }

  componentDidMount() {
    console.log("Im mounted");
  }

  nextCheckpoint = () => {
    this.setState({currentLocation: this.state.currentLocation + 1});
  }

  render() {
    return (
      <div className="App">
        <Map variable1={this.state.variable1}/>
        <UI currentLocation={this.state.currentLocation} nextCheckpoint={this.nextCheckpoint} isTraveling={this.state.isTraveling}/>

      </div>
    );
  }
}

export default App;
