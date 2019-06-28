import React, {Component} from 'react'
import HogTile from './HogTile'
import {Grid} from 'semantic-ui-react'

export default class HogContainer extends Component {
  render(){
    return(
      <Grid>
        {this.props.hogs.map(hog => <HogTile hog={hog}/>)}
      </Grid>
    )
  }
}
