import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Options from './Options'
import Hog from './Hog'
import hogs from '../porkers_data';

class App extends Component {

	constructor(){
		super()
		this.state = { hogs: hogs }
	}

	nameSort = (a,b)=>{
		if(a.name < b.name) return -1
		if(a.name > b.name) return  1
		else return 0
	}
	
	weightSort = (a,b)=>{
		if(a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) return  1
		if(a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) return -1
		else return 0
	}

	compareFunctions = {
		'name': this.nameSort,
		'weight': this.weightSort
	}

	sortHogs = (e)=>{
		console.log('sortHogs invoked')
		this.setState({
			hogs: this.state.hogs.sort(this.compareFunctions[e.target.value])
		})
	}


	toggleGreasedHogs = (e)=>{
		if(e.target.innerText.startsWith('Hide')) {
			this.setState({ hogs: hogs.filter(hog=> !hog.greased ) })
			e.target.innerText = 'Show greasy bois'
		}
		else {
			this.setState({ hogs: hogs })
			e.target.innerText = 'Hide greasy bois'
		}
	}

	hideHog = (name)=> this.setState({ hogs: this.state.hogs.filter(hog => hog.name !== name ) })

  render() {
    return (
      <div className="App">
          <Nav/>
          <hr/>
          <Options hideHog={this.hideHog} sortHogs={this.sortHogs} toggleGreasedHogs={this.toggleGreasedHogs} />
          <br/><br/>
          <div id="pig-container" className="ui grid container">{this.state.hogs.map(hog => <Hog hideHog={this.hideHog} key={hogs.indexOf(hog)} hog={hog} />)}</div>
      </div>
    )
  }
}

export default App;
