import React from 'react'

export default function Modal(props) {
  return (
    <div className="ui modal" style={{ display: "block" }}>
      <i className="close icon"></i>
      <div className="header">
        {props.hog.name}
      </div>
      <div className="image content">
        <div className="ui medium image">
          <img src={require(`../hog-imgs/${props.hog.name.replace(/\ /g, '_').toLowerCase()}.jpg`)} />
        </div>
        <div className="description">
          <p>Specialty: {props.hog.specialty}</p>
          <p>Weight: {props.hog.weight}</p>
          <p>Highest Medal: {props.hog['highest medal achieved']}</p>
          <p>Greasy Boi? {props.hog.greased ? <i className="thumbs up icon"></i> : <i className="thumbs down icon"></i>}</p>
        </div>
      </div>
      <div className="actions">
        <div className="ui positive right labeled icon button" onClick={props.closeModal}>
          Cool Pig
          <i className="checkmark icon"></i>
        </div>
      </div>
    </div >
  )
}
