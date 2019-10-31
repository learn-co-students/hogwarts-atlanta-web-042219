import React, { Component } from 'react'
import hogs from '../porkers_data';
import Hog from './HogTile'

class HogContainer extends React.Component {


render() {
  return(
    <div className="ui grid container">
     {this.props.hog.map(hog => <Hog 
     name={hog.name} 
     specialty={hog.specialty} 
     greased={hog.greased} 
     img={hog.img} 
     weight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} 
     medal={hog['highest medal achieved']}
     />)}
    </div>
  )
}

}

export default HogContainer;
