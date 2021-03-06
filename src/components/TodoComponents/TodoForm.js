import React from 'react';

const TodoForm = props => {
  return (
    <form className="todo-form">
      <input className="todo-input"
             type="text"
             placeholder={props.defaultText}
             value={props.displayText}
             onChange={props.changeEvent} />
      <input className="todo-search"
             type="text"
             placeholder="Search here"
             value={props.searchText}
             onChange={props.searchEvent} />
      <button className="todo-add-btn"
              type="submit"
              onClick={props.handler} >Add</button>
      <button className="todo-clear-btn"
              onClick={props.clearTodo}>Clear Completed</button>
    </form>
  );
}

export default TodoForm;
