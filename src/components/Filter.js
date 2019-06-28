import React, {Component} from 'react'

export default class Filter extends Component {
  render(){
    return(
      <div class="ui checkbox" onChange={this.props.greasedOnly}>
        <label>Greased?</label>
        <input type="checkbox" class="hidden" readonly="" tabindex="0" />
      </div>
    )
  }
}
