import React, { Component } from 'react'

export default class HogCard extends Component {
  render() {
    console.log(this.props.hog);
    return (
      <div className="ui card ui eight wide column">
        <div className="image">
          <img src={require(`../hog-imgs/${this.props.hog.name.replace(/\ /g, '_').toLowerCase()}.jpg`)} />
        </div>
        <div className="content">
          <a className="header" onClick={(e) => this.props.openModal(this.props.hog)}>{this.props.hog.name}</a>
        </div>
        <div className="extra content">
          <a onClick={e => this.props.hideHog(this.props.hog)}>
            Greasy Boi {this.props.hog.greased ? <i className="thumbs up icon"></i> : <i className="thumbs down icon"></i>}
          </a>
        </div>
      </div >
    )
  }
}
