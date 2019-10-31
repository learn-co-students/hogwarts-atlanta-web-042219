import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import hogs from '../porkers_data';
import HogContainer from './HogContainer';
import HogTile from './HogTile';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      hogs: hogs,
      greaseFilter: false,
      sortByName: false,
      sortByWeight: false
    }
  }
  
  filterGreased = (e) => {
    // console.log(e)
    if(hogs.length !== this.state.hogs.length){
      this.setState({hogs: hogs, greaseFilter : true})
    }else(
    this.setState({hogs: this.state.hogs.filter(hog => hog.greased === false), greaseFilter: false}))
  }
  
    sortByName = (a,b) => {
      this.setState({
        hogs: this.state.hogs.sort((a,b) => {
          if(a.name < b.name)return -1
          if (a.name > b.name) return 1
          return 0
        })
      })
    }

    sortByWeight = (a,b) => {
      this.setState({
        hogs: this.state.hogs.sort((a,b) => {
          if(a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])return -1
          if (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) return 1
          return 0
        })
      })
    }

    refresh = (e) => {
      this.setState({hogs: hogs})
    }

  render() {
    return (
      <div className="App">
          < Nav /> 
          <button className="ui primary button" onClick={this.filterGreased}> 
            {this.state.greaseFilter ? "Unfilter greased hogs" : "Filter greased hogs" } 
         </button>
          
          <button className="ui primary button" onClick={this.sortByName}> 
            {this.state.sortByName ? "Unsort by name" : "Sort by name" } </button>

          <button className="ui primary button" onClick={this.sortByWeight}> Sort by weight </button>
          <button className="ui primary button"onClick={this.refresh}> Refresh data </button> 
          <br/>
          <br/>
          < HogContainer hog={this.state.hogs} />
      </div>
    )
  }
}

export default App;
