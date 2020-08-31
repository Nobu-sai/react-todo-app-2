import React from 'react';
import './To-Do.css';


function ToDo(props) {
  return (
    <div className="to-do">
      <h2>{props.title}</h2>
    </div>
  )
}

export default ToDo;