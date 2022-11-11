import React, { useState } from 'react';
import PropTypes from 'prop-types';


const ToDoForm = (props) => {

const [input, setInput] = useState("");

const handleSubmit = (e) => {
e.preventDefault()
props.addTodo(input)
setInput("")

}
 
  return (
  <form 
  className='todo-form'
  onSubmit={handleSubmit}>
    <input 
    value={input}
    onChange={(e) => setInput(e.target.value)} 
    className='todo-input' 
    placeholder='Write a task'/>

    <button 
    className='todo-button'
    type='submit'>Add New Task</button>
  </form>
)};

ToDoForm.propTypes = {};

ToDoForm.defaultProps = {};

export default ToDoForm;
