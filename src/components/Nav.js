import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {

	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<select className="ui selection dropdown" onChange={e => props.filterHogs(e.target.value)}>
				<option value="0">All Piggy</option>
				<option value="1">Greasy Bois</option>
				<option value="2">Clean</option>
			</select>
			<select className="ui selection dropdown" onChange={e => props.sortHogs(e.target.value)}>
				<option value="">Sort By</option>
				<option value="1">Name</option>
				<option value="2">Weight</option>
			</select>
		</div>
	)
}

export default Nav
