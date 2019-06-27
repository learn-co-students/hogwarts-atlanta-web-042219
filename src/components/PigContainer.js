import React, { Component } from 'react'
import PigCard from "./PigCard"
import { hogs } from "../porkers_data"

export default class PigContainer extends Component {

    state ={
        eachPig: hogs
    }

    sortGreased = () => {
        const {eachPig} = this.state;
        const greasedPigs =  eachPig.filter(pig=> pig.greased)
        this.setState({eachPig: greasedPigs})
    }

    render() {

        const {eachPig} = this.state;

        return (
            <div>
                <button onClick={this.sortGreased}>Sort Pigs By Greased</button>
            <div className="ui grid container">
                {eachPig.map(pig=>{
                    return <PigCard 
                    image={pig.image}
                    name={pig.name}
                    specialty={pig.specialty}
                    greased={pig.greased}
                    />
                })}
            </div>
        </div>
        )
    }
}
