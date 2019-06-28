import React from 'react'

export default class Options extends React.Component {
	render() {
		return (
			<div>
				<button onClick={this.props.toggleGreasedHogs}>Hide greasy bois</button>
				&nbsp; &nbsp; &nbsp;
	      <select onChange={this.props.sortHogs}>
	      	<option disabled selected> Sort by </option>
	      	<option value="name"> Name </option>
	      	<option value="weight"> Weight </option>
	      </select>
			</div>
		)
	}
}