import React, { useEffect, useState } from "react";
import ToDoForm from "./ToDoForm/ToDoForm";
import ToDoItem from "./ToDoItem/ToDoItem";


const Home = () => {

	const [todos, setTodos] = useState([]);


const addTodo = (text) => {
let id = 1;
if (todos.length > 0) {
	id = todos[0].id + 1
}




let todo = {label: label, done: false};
let newTodos = [todo, ...todos];
setTodos(newTodos)

};

useEffect(() => {
	fetchTodos()
}, []);

const fetchTodos = () => {
	fetch('https://assets.breatheco.de/apis/fake/todos/user/ilias', {
		method: "GET",
		headers: {
		  "Content-Type": "application/json"
		}
	  })
	  .then(resp => {
		  console.log(resp.ok); // will be true if the response is successfull
		  console.log(resp.status); // the status code = 200 or code = 400 etc.
		//  console.log(resp.text()); // will try return the exact result as string
		  return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
	  })
	  .then(data => {
		  //here is were your code should start after the fetch finishes
		  console.log(data); //this will print on the console the exact object received from the server
		  setTodos(data)
	  })
	  .catch(error => {
		  //error handling
		  console.log(error);
	  });
}

const removeTodo = (label) => {
    let updatedTodos = [...todos].filter((todo) => todo.label !== label);
    setTodos(updatedTodos);
	fetch('https://assets.breatheco.de/apis/fake/todos/user/ilias', {
		method: "PUT",
		body: JSON.stringify(updatedTodos),
		headers: {
		  "Content-Type": "application/json"
		}
	  })
  };


	return (
		<div className="todo-app">
			<h1>Tasks to do</h1>
			<ToDoForm addTodo = {addTodo}/>
			{!todos.length && "No tasks, add a new task"}
			{todos.map((todo) => {
				return <ToDoItem removeTodo={removeTodo} key={todo.label} todo={todo} />
				
			})}
		</div>
	);
};

export default Home;
