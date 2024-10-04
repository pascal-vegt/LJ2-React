import './App.css';
import ToDoItem from './components/ToDoItem';
import ToDoItemInput from './components/ToDoItemInput';
import ToDoList from './components/ToDoList';
import { useState } from "react";

function App() {

  let name = "Nova";

  const [items, setItems] = useState([
    { id: 1, text: "Afwas", completed: false },
    { id: 2, text: "Huiswerk maken", completed: false },
    { id: 3, text: "Werken", completed: false },
  ]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const toggleComplete = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  return (
    <>
      <div className="container">
        <h1><span className="highlight">{name}'s</span> To Do List</h1>
        <ToDoList>
          {items.map((item) => (
            <ToDoItem
              key={item.id}
              item={item}
              onDelete={deleteItem}
              onToggleComplete={toggleComplete}
            />
          ))}
        </ToDoList>
        <ToDoItemInput onAddItem={addItem} />
      </div>
    </>
  );
}

export default App;
