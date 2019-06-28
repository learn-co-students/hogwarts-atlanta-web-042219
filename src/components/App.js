import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'
import Modal from './Modal'

class App extends Component {

  state = {
    showModal: false,
    showHog: {},
    hogs: hogs
  }

  openModal = (hog) => {
    this.setState({
      showModal: true,
      showHog: hog
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false,
      showHog: {}
    })
  }

  filterHogs = (value) => {
    switch (value) {
      case "0":
        return this.setState({ hogs: hogs })
      case "1":
        return this.setState({ hogs: hogs.filter(hog => hog.greased) })
      case "2":
        return this.setState({ hogs: hogs.filter(hog => !hog.greased) })
      default:
        return this.setState({ hogs: hogs })
    }
  }

  sortHogs = (value) => {
    console.log("object", value);
    console.log(this.state.hogs);
    switch (value) {
      case "1":
        return this.setState({
          hogs: this.state.hogs.sort(
            (a, b) => {
              if (a.name < b.name) return -1
              if (a.name > b.name) return 1
              return 0
            })
        })
      case "2":
        return this.setState({
          hogs:
            this.state.hogs.sort(
              (a, b) => {
                if (a.weight < b.weight) return -1
                if (a.weight > b.weight) return 1
                return 0
              })
        })
      default:
        return this.setState({ hogs: hogs })
    }
  }

  hideHog = (hideHog) => {
    this.setState({
      hogs: this.state.hogs.filter(hog => (hog.name !== hideHog.name))
    })
  }

  render() {
    return (
      <div className="App">
        < Nav filterHogs={this.filterHogs} sortHogs={this.sortHogs} />
        < HogContainer hogs={this.state.hogs} openModal={this.openModal} hideHog={this.hideHog} />
        {this.state.showModal ? <Modal hog={this.state.showHog} closeModal={this.closeModal} /> : null}
      </div>
    )
  }
}

export default App;
