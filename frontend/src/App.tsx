import './App.css'
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material'
import ToDoItem from './components/todoItem/ToDoItem'
import ToDoSummary from './components/todoSummary/ToDoSummary';

function App() {




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
          <ToDoItem />

        </div>

      </Container>
    </CssBaseline>
  )
}

export default App
