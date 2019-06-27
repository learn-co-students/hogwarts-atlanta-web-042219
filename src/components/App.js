import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogsData from '../porkers_data';
import HogContainer from './HogContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      hogsArray: hogsData,
      filterOn: false
    }
  }


  filterGreasedHogs = () => {
    if (hogsData.length !== this.state.hogsArray.length) this.setState({hogsArray: hogsData, filterOn: false})
    else this.setState({hogsArray: this.state.hogsArray.filter(hog => hog.greased === false), filterOn: true})
  }


  sortByName = () => {
    let sortedState = this.state.hogsArray.sort(this.compareName)
    this.setState({hogsArray: sortedState})
  }
  
  compareName = (a, b) => {
    if (a.name > b.name) return 1
    else if (a.name < b.name) return - 1
    else return 0
  }
  

  sortByWeight = () => {
    let sortedWeight = this.state.hogsArray.sort(this.compareWeight)
    this.setState({hogsArray: sortedWeight})
  }

  compareWeight = (a, b) => {
    if (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) return 1
    else if (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) return - 1
    else return 0
  }


  render() {
    return (
      <div className="App">
        <Nav/>
        <HogContainer 
          hogs={this.state.hogsArray} 
          filterHogs={this.filterGreasedHogs} 
          filterOn={this.state.filterOn}
          sortByName={this.sortByName}
          sortByWeight={this.sortByWeight}
        />
      </div>
    )
  }
}

export default App;
