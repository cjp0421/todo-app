import './App.css'
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
    </>
  )
}

export default App
