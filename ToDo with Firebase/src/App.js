import React, { useState, useEffect } from 'react';
import ToDo from './ToDo';
import './App.css'
import { QuerySnapshot, collection, onSnapshot, query, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  //create
  const createTodo = async (e) => {
    e.preventDefault();
    if (input === '') {
      alert('Please enter valid todo')
      return;
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      Completed: false,
    })

    setInput('');
  }
  //read
  useEffect(() => {
    const q = query(collection(db, 'todos'))
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let todosArr = []
      QuerySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id })
      });

      setTodos(todosArr);

      return () => unsubscribe()
    })
  }, [])
  //delete

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }

  //update
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      Completed: !todo.Completed
    })
  }

  return (
    <div className='bg'>
      <div className='container'>
        <h3> ToDo App</h3>
        <form onSubmit={createTodo}>
          <input value={input} onChange={(e) => setInput(e.target.value)} type="text" name="" id="input-field" placeholder='Add Item' />
          <button id='btn'>Add to List</button>
        </form>
        <ul>
          {todos.map((item, index) => (
            <ToDo key={index} todo={item} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App;