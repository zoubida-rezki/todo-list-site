import React,{Fragment,useState} from "react";

const EditTodo = ({todo}) =>{
    // console.log(todo)
    const[discription,setDiscription]=useState(todo.discription);

    const updateDiscription = async(e) =>{
        e.preventDefault();
        try {
            const body ={discription};
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`,{
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            // console.log(response)
            window.location = "/";
        } catch (error) {
            console.error(error.message)
        }
    }
    return <Fragment>
<button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
  Edit
</button>

<div class="modal" id={`id${todo.todo_id}`} onClick={()=>setDiscription(todo.discription)}>
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Edit Todo</h4>
        <button type="button" class="close" data-dismiss="modal" onClick={()=>setDiscription(todo.discription)}>&times;</button>
      </div>

      <div class="modal-body">
        <input type="text" className="form-control" value={discription} onChange={e=> setDiscription(e.target.value)}/>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={e => updateDiscription(e)}>Edit</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={()=>setDiscription(todo.discription)}>Close</button>
      </div>

    </div>
  </div>
</div>

    </Fragment>;
};

export default EditTodo;