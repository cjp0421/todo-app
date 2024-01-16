import './App.css'
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material'
import ToDoItem from './components/todoItem/ToDoItem'
import ToDoSummary from './components/todoSummary/ToDoSummary';

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
        <div className="heading">
          <h1 role="header">To Do or Not To Do...</h1>
          <h3>that is the App!</h3>
        </div>
        <div>

          <ToDoSummary />
          <div className='shoebox'>👠</div>
          <ToDoItem id={toDoItem.id} text={toDoItem.text} completed={toDoItem.completed} important={toDoItem.important} onToggle={() => toDoItem.onToggle} />

        </div>

      </Container>
    </CssBaseline>
  )
}

export default App
