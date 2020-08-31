import React, { useState } from 'react';
import './App.css';
import ToDo from './To-Do.js'

function App() {
  const [todos, setTodo] = useState(['To-do-1', 'To-do-2', 'To-do-3']);
  const [input, setInput] = useState([""]);

  const addToDo = (e) => {
    e.preventDefault()
    setTodo([...todos, input])

    console.log(todos);

    setInput("")
  }

  // console.log(todos);

  return (
    <div className="App">

      <div className="container">
        <h1>React To-do App</h1>
        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter the title of a new To-do"></input>
          <button onClick={e => addToDo(e)}>Add the new To-do</button>
        </form>

        {console.log(input)}

        {
          todos.map((todo)=>(
              <ToDo title={todo}/>
          ))
        }
        
      </div>

    </div>
  );


}

export default App;
