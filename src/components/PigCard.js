import React, { Component } from 'react'

export default class PigCard extends Component {
    state ={
        showInfo: false
    }

    handleInfo = () => {
        this.setState({showInfo: !this.state.showInfo})
    }

    render() {

    return (
    <div className="ui eight wide column">
        <div className="ui card">
            <img className="image" src={this.props.image} alt={this.props.name}/> 
        <div className="content">
            <a className="header" onClick={this.handleInfo}>{this.props.name}</a>
        </div>
        {this.state.showInfo &&
        <div className="content">
            <span className="right floated">
            {this.props.specialty}
            </span>
            <span className="left floated">
            {this.props.greased ? "Greased" : "Not Greased"}
            </span>
        </div>
        }
        </div>
    </div>
        )
    }
}
