import React, {Fragment, useEffect, useState} from "react";
import EditTodo from "./EditTodo";

const ListTodo = () => {

    const [todos, setTododos] = useState([]);

    //delete function
    const deleteTodo = async(id)=>{
        console.log(id)
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`,{
                method: "DELETE"
            });
                setTododos(todos.filter(todo => todo.todo_id !== id));
        } catch (error) {
            console.error(error.message)
        }
    }

    const getTodos = async () =>{
        try {
            const response = await fetch("http://localhost:5000/todos")
            const json_data = await response.json()
            // console.log(json_data)
            setTododos(json_data);
        } catch (error) {
            console.error(error.message)
        }
    }
    useEffect(()=>{
        getTodos();
    },[]);
    // console.log(todos);
    return <Fragment>
        <table class="table mt-5 text-center">
    <thead>
      <tr >
        <th>description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      { todos.map(todo =>(
      <tr key={todo.todo_id}>
        <td>{todo.discription}</td>
        <td><EditTodo todo={todo}/></td>
        <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
      </tr>) )}
    </tbody>
  </table>
    </Fragment>;
};

export default ListTodo;
