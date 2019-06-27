import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogsData from '../porkers_data';
import HogsContainer from './HogsContainer'


class App extends Component {
  constructor(){
    super()
    this.state = {
      hogArray: hogsData,
      filterOn: false
    }
  }

  filterGreased = () => {
      if(this.state.hogArray.length !== hogsData.length){
        this.setState({hogArray: hogsData, filterOn: false})
      } else {
        this.setState({hogArray: this.state.hogArray.filter(hog => hog.greased === false ), filterOn: true})
      }
  }

  compareWeight = (a,b)=>{
    if(a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) return -1
    if(a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']  > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] ) return 1
    else return 0
  }

  compareName = (a,b)=>{
    if(a.name < b.name) return -1
    if(a.name > b.name) return 1
    else return 0
  }

  nameSort = () => {
    // console.log(this.state.hogArray.sort(this.compareName))
    let sortedState = this.state.hogArray.sort(this.compareName)
    console.log(sortedState)
    this.setState({hogArray: sortedState})
  }

  weightSort = () => {
    let sortedState = this.state.hogArray.sort(this.compareWeight)
    console.log(sortedState)
    this.setState({hogArray: sortedState})
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <button className="ui primary button" onClick={this.filterGreased}>{this.state.filterOn === false ? "Filter dem dirty hogs" : "Turn off Filter"}</button>
          <button className="ui primary button" onClick={this.nameSort}>Sort by Name</button>
          <button className="ui primary button" onClick={this.weightSort}>Sort by Weight</button>
          < HogsContainer hogs={this.state.hogArray} filterGreased={this.filterGreased}/>
      </div>
    )
  }
}

export default App;
