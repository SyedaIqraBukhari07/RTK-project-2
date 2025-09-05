import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import { Provider } from 'react-redux'
import { store } from './app/Store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <AddTodo />
      <Todo />
    </Provider>
  )
}

export default App

