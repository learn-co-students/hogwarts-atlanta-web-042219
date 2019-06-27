import React, { Component } from 'react';
import image from '../hog-imgs/augustus_gloop.jpg'

class hogTile extends Component {
    constructor(props) {
        super(props);
        this.state = { displayInfo: false }
    }

    changeInfoStatus = (e) => {
        console.log(this.props.hog)
        this.setState({ displayInfo: !this.state.displayInfo })
    }

    render() { 
        return ( <div >
                <h1 onClick={this.changeInfoStatus}>
                    {this.props.hog.name}
                </h1>
                
                <img src={image} alt="fattypig"/> <br/>
                
                <button className="ui primary button" onClick={this.changeInfoStatus}>Show Info</button>
                {this.state.displayInfo ? <p>Specialty {this.props.hog.specialty} <br/> Highest Medal: {this.props.hog['highest medal achieved']} <br/> Weight:{this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} <br/> Greased?: {this.props.hog.greased ? "Yeehaw" : "Naw"}</p> : null}

                </div> );
    }
}
 
export default hogTile;