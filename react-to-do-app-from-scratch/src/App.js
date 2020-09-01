import React, { useState, useEffect } from 'react';
import './App.css';
import ToDo from './To-Do.js'
import db from './firebase.js'

function App() {
  const [todos, setTodo] = useState([]);
  const [input, setInput] = useState("");


  useEffect(()=>{
    // console.log('Hello')
    db.collection('todos').onSnapshot(snapshot=>{
      setTodo(snapshot.docs.map((doc)=> doc.data().title))
    })
  }, [])


  const addToDo = (e) => {
    e.preventDefault()

    // Add a New into  todos .
    setTodo([...todos, input])

    // Add a new todo  into  Firestore
    db.collection('todos').add({
      title: input
    });

    // Reflesh the input Form.
    setInput("")
   
  }

    const deleteAToDo = (ToDoDiv) => {
      // console.log(ToDoDiv)
      const todoTitle = ToDoDiv.children[0].innerHTML;
      // console.log(todoTitle)

      db.collection('todos').where('title', '==', todoTitle).get()
      .then((querySnapshot)=>{
        console.log(querySnapshot.docs[0].ref)
        querySnapshot.docs[0].ref.delete();
      })

      // db.collection('todos').where('title', '==', todoTitle).get()
      // .then((docs)=>{
      //   console.log(docs)    
      //   // docs[0].delete();
      // })
  }

  // let todoIds = []

  const getTodoIds = async () => {
    const todosCollection = await db.collection('todos').get();
    // const todosCollection = db.collection('todos')

    let todoIds = []

    // console.log(todosCollection)
    todosCollection.docs.map((doc)=>{
     todoIds.push(doc.id);
    })

    // console.log(todoIds)
    return todoIds;
  }


  const deleteAllToDos = async () => {
    const todoIds = await getTodoIds();
    // console.log(todoIds)
    todoIds.map((todoId)=>{
      db.collection('todos').doc(todoId).delete()
    })

    // console.log(todoIds)

  }


  return (
    <div className="App">

      <div className="container">
        <h1>React To-do App</h1>
        <p className="delete-button" onClick={e => deleteAllToDos()}>Delete All To-dos</p>
        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter the title of a new To-do"></input>
          <button disabled={!input} onClick={e => addToDo(e)}>Add the new To-do</button>
        </form>

        {
          todos.map((todo, i)=>(
              <ToDo title={todo} delete={e => deleteAToDo(e.target.parentElement)} key={i}/>
          ))
        }
        
      </div>

    </div>
  );


}

export default App;
