import React from 'react';
import HogTile from "./HogTile"

class HogsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            {this.props.hogs.map((hog, index) => <HogTile  key={index} hog = {hog} filterGreased={this.props.filterGreased}/>)}    
            </div>
             );
    }
}
 
export default HogsContainer;