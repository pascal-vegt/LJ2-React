const ToDoItemInput = () => {

    let AddToDoItem = () => {
        console.log("click");
    }
    let Message = (e) => {
        let message = e.target.value
        console.log(message);
    }

    return ( 
        <div className="todoiteminput">
        <label htmlFor="input">Add Item</label><br />
        <textarea name="ToDoInput" id="input" onChange={Message}></textarea>
        <input type="button" value="Submit" id="button" onClick={AddToDoItem}/>
        </div>
    );
}
 
export default ToDoItemInput;