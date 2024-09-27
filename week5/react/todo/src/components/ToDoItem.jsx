const ToDoItem = ({text}) => {
    return ( 
        <li>
            <input type="checkbox" id="{item.id}"/>
            <label htmlFor="{item.id}">{text}</label>
        </li>
     );
}
 
export default ToDoItem;