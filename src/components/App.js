import React, { useEffect, useState } from 'react'
import '../styles/App.css';


const getData = async () =>{
  const rawData = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await rawData.json()
  return data
}
const Loader = () => <div id="loader">Loading...</div>
const App = () => {
  const[loading,setLoading] = useState(true);
  const [todos,setTodos] = useState([])

  useEffect(()=>{
    getData().then(data=> {
      setTodos(data)
      setLoading(false);
     })
  },[])
  return (
    <div id="main">
      {
        loading ? <Loader /> :
      todos.map(todo=> <div key={`ky${todo.id}`} id={`todo-${todo.id}`}>{todo.title}</div>)
      }
    </div>
  )
}


export default App;
