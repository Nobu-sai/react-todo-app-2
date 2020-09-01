import React from 'react';
import './To-Do.css';


function ToDo(props) {
  return (
    <div className="to-do">
      <h2>{props.title}</h2>
      <p onClick={props.delete} className="delete-button">Delete this To-do</p>
    </div>
  )
}

export default ToDo;