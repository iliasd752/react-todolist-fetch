import React, { useState } from "react";
import ToDoForm from "./ToDoForm/ToDoForm";
import ToDoItem from "./ToDoItem/ToDoItem";


const Home = () => {

	const [todos, setTodos] = useState([]);


const addTodo = (text) => {
let id = 1;
if (todos.length > 0) {
	id = todos[0].id + 1
}




let todo = {id: id, text: text};
let newTodos = [todo, ...todos];
setTodos(newTodos)

};

const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };


	return (
		<div className="todo-app">
			<h1>Tasks to do</h1>
			<ToDoForm addTodo = {addTodo}/>
			{!todos.length && "No tasks, add a new task"}
			{todos.map((todo) => {
				return <ToDoItem removeTodo={removeTodo} key={todo.id} todo={todo} />
			})}
		</div>
	);
};

export default Home;
