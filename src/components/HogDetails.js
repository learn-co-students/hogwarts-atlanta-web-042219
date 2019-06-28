import React, {Component} from 'react'
import {Card} from 'semantic-ui-react'

export default class HogDetails extends Component{
  render(){

    const medal = this.props.hog['highest medal achieved']

    const weight = this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    
    return(
      <Card.Content>
        <p>Specialty: {this.props.hog.specialty}</p>
        <p>Medal: {medal}</p>
        <p>Weight: {weight}</p>
        <p>Greased: {this.props.hog.greased.toString()}</p>
      </Card.Content>
    )
  }
}
