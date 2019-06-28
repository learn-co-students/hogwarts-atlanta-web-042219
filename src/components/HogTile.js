import React, {Component} from 'react'
import {Card} from 'semantic-ui-react'
import HogDetails from './HogDetails'

export default class HogTile extends Component {

  constructor(){
    super()
    this.state = {
      isClicked: false
    }
  }

// prevState refers to the most current state of your state...the bang operator coerces it to the opposite of its current value in this case

  handleClick = () => {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  render(){

    const hogImage = this.props.hog.name.toLowerCase().split(" ").join("_")

    const image = require(`../hog-imgs/${hogImage}.jpg`)

    return(
      <Card onClick={this.handleClick}>
        <Card.Header>
          {this.props.hog.name}
        </Card.Header>
        <img src={image}/>
        {this.state.isClicked ? <HogDetails hog={this.props.hog}/> : null}
      </Card>
    )
  }
}
