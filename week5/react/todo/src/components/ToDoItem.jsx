const ToDoItem = ({ item, onDelete, onToggleComplete }) => {
    return (
      <li className={`todo-item ${item.completed ? "completed" : ""}`}>
        <span className="todo-text">{item.text}</span>
        <div className="actions">
          <button className="check-button" onClick={() => onToggleComplete(item.id)}>
            {item.completed ? "✓" : "0"}
          </button>
          <button className="delete-button" onClick={() => onDelete(item.id)}>🗑️</button>
        </div>
      </li>
    );
  };
  
  export default ToDoItem;
  