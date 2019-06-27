import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import PigContainer from './PigContainer';
// import hogs from '../porkers_data';

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          <PigContainer />
      </div>
    )
  }
}

export default App;
