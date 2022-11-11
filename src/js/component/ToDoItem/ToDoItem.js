import React, { useState } from 'react';
import PropTypes from 'prop-types';


const ToDoItem = (props) => {

  const [hover, setHover] = useState(false)

  

  


  return (
  <div className='todo-row' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
    {props.todo.text}
    {hover &&  <button onClick={() => props.removeTodo(props.todo.id)}>Delete</button>}
  </div>
)};

ToDoItem.propTypes = {};

ToDoItem.defaultProps = {};

export default ToDoItem;
