import React from 'react'
import image from '../hog-imgs/augustus_gloop.jpg'

class HogTile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayInfo: false
    }
  }

  toggleInfo = () => {this.setState({displayInfo: !this.state.displayInfo})}

  hogInfo = () => {
    return(
      <p className='description'>
        Specialty: {this.props.hog.specialty} <br/>
        Greased? {this.props.hog.greased ? "SUPER greasy!" : "Naw, this boi needs some grease."} <br/>
        Highest Medal Earned: {this.props.hog['highest medal achieved']} <br/>
        Weight As A Ratio of Hog to an LG Regrigerator:
          {this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}
      </p>
    )
  }

  render() {
    return (
      <div className='ui cards'>
        <div className='card'>
          <h1 className='header'>{this.props.hog.name}</h1>
          <img className='image' src={image} alt="Pig" /> <br/>
          <button className="ui primary button" onClick={this.toggleInfo}>Toggle Info</button> <br/> <br/>
          {this.state.displayInfo ? this.hogInfo() : null} <br/>
        </div>
      </div>
    );
  }
}
 
export default HogTile;