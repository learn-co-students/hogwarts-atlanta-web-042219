import React from 'react'

export default class Hog extends React.Component {

	constructor(props){
		super(props)
		this.state = { showInfo: false }
	}

	toggleInfo = ()=>{
		console.log('invoked')
		this.setState({ showInfo: !this.state.showInfo })
	}

	render() {
		let src = require(`../hog-imgs/${this.props.hog.name.toLowerCase().replace(/ /g, '_')}.jpg`)
		return (
			<div className="ui seven wide column pigTile">
				<button onClick={(e)=>this.props.hideHog(this.props.hog.name)} style={{float: 'right', background: 'none', border: 'none'}}>X</button>
				<h1>{this.props.hog.name}</h1>
				<img draggable="false" src={src} alt={this.props.hog.name}  onClick={this.toggleInfo}></img>
				{this.state.showInfo ? 
					<p>
						Specialty: {this.props.hog.specialty}<br/>
						Weighs {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} refrigerators<br/>
						{this.props.hog['highest medal achieved'][0].toUpperCase()+this.props.hog['highest medal achieved'].slice(1)} Medalist<br/><br/>
						{this.props.hog.greased ? 'GREASY BOI' : 'This pig is clean.'}<br/><br/>
						<button onClick={(e)=>this.props.hideHog(this.props.hog.name)}>Hide me! Oink!</button>
					</p> : null }
			</div>
		)
	}
}