import './App.css'
import CssBaseline from '@mui/material/CssBaseline';
import { Button, Container } from '@mui/material'
import ToDoItem from './components/ToDoItem'

function App() {


  const toDoItem = {
    id: 1,
    text: "CODE!",
    completed: false,
    important: true,
    onToggle: true
  }

  return (
    <CssBaseline>
      <Container maxWidth="sm">
        <div>
          <h1 role="header">!To Do App!</h1>
          <div className='shoebox'>👠</div>
          <ToDoItem id={toDoItem.id} text={toDoItem.text} completed={toDoItem.completed} important={toDoItem.important} onToggle={() => toDoItem.onToggle} />
          {/* <Button >Click me!</Button> */}
        </div>

      </Container>
    </CssBaseline>
  )
}

export default App
