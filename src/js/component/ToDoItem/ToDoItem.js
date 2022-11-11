import React, { useState } from 'react';
import PropTypes from 'prop-types';


const ToDoItem = (props) => {

  const [hover, setHover] = useState(false)

  

  


  return (
  <div className='todo-row' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
    {props.todo.label}
    {hover &&  <button onClick={() => props.removeTodo(props.todo.label)}>Delete</button>}
  </div>
)};

ToDoItem.propTypes = {};

ToDoItem.defaultProps = {};

export default ToDoItem;
