import React, { Component } from 'react'
import hogs from '../porkers_data';

class HogTile extends React.Component {

  constructor() {
    super();
      this.state = {
        displayInfo: false
      }
  }

  handleClick = (e) => {
    // console.log(e)
    this.setState({ displayInfo: !this.state.displayInfo })
    // console.log(this.state)
  }
  render() {
    return(
      <div className="ui eight wide column">
      <h3>{this.props.name}</h3>
      <img src={this.props.img}/><br/>
      {this.state.displayInfo ? <p>
      Specialty: {this.props.specialty} <br/> 
      Greased?: {this.props.greased? "YUP" : "Get the Grease!"} <br/> 
      Weight: {this.props.weight} x LG - 24.7 Cu. Ft. French Door Fridges! <br/> 
      Highest medal achieved: {this.props.medal} <br/>
      </p> : null} 
      <button className="ui primary button" onClick={this.handleClick}>Hog Details</button> 
      </div>

    )
  }
}


        
export default HogTile;