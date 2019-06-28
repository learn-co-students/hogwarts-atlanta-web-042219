import React from 'react'
import HogCard from './HogCard'

export default function HogContainer(props) {
  return (
    <div className="ui grid container">
      {props.hogs.map(hog => <HogCard hog={hog} openModal={props.openModal} hideHog={props.hideHog} />)}
    </div>
  )
}
