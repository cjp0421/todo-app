import './App.css'
import { Button } from '@mui/material'
// import ToDoItem from './components/ToDoItem'

function App() {


  const toDoItem = {
    text: "CODE!",
    completed: false,
    important: true
  }

  return (
    <>
      <h1>!To Do App!</h1>
      {/* <ToDoItem {...toDoItem} /> */}
      <Button>Click me!</Button>
    </>
  )
}

export default App
