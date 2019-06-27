import React from 'react'
import HogTile from './HogTile'

class HogContainer extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.filterHogs} className="ui primary button">
          {this.props.filterOn ? 'Show All Hogs' : 'Remove Greasy Bois' }
        </button>

        <button onClick={this.props.sortByName} className='ui primary button'>
          Sort Hogs By Name
        </button>
        
        <button onClick={this.props.sortByWeight} className='ui primary button'>
          Sort Hogs By Weight
        </button>

        <br/> <br/>
        {this.props.hogs.map((hog, index) => <HogTile key={index} hog={hog}/>)}
      </div>
    );
  }
}
 
export default HogContainer;