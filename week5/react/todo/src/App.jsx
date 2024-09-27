import './App.css'
import ToDoItem from './components/ToDoItem'
import ToDoItemInput from './components/ToDoItemInput'
import ToDoList from './components/ToDoList'

function App() {

  return (
    <>
    
    <ToDoList>
    <ToDoItem text="Testing" id="1"></ToDoItem>
    <ToDoItem text="Testing1" id="2"></ToDoItem>
    <ToDoItem text="Testing2" id="3"></ToDoItem>
    <ToDoItem text="Testing3" id="4"></ToDoItem>
    <ToDoItemInput/>
    </ToDoList>
    
    
    
    </>
  )
}

export default App
