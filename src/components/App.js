import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'
import Filter from './Filter'

class App extends Component {

  constructor(){
    super()
    this.state = {
      isGreased: false,
      hogs: hogs
    }
  }

  greasedOnly = () => {
    this.setState({isGreased: !this.state.isGreased})
  }

  showHogs = () => {
    if(this.state.isGreased){
      return this.state.hogs.filter(hog => hog.greased === true)
    } else {
      return hogs
    }
  }


  render() {

    return (
      <div className="App">
          <Nav />
          <Filter greasedOnly={this.greasedOnly}/>
          <HogContainer hogs={this.showHogs()}/>
      </div>
    )
  }
}

export default App;
