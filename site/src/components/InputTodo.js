// import { Fragment } from "react";
import React,{Fragment, useState} from 'react';

const InputTodo = ()=>{

    const[discription, setDiscription]=useState('');

    const onSubmitForm = async e =>{
        e.preventDefault();
        try {
            const body = {discription};
            console.log(body["discription"])
            const b = body["discription"]
            const response =await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers:{"content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response)
            window.location="/";
        } catch (error) {
            console.error(error.message)
        }
    }

    return (<Fragment>
        <h1 className='text-center mt-5'>pern todo list</h1>
        <form className='d-flex mt-5' onSubmit={onSubmitForm}>
            <input type="text" className="form-control" value={discription} onChange={e=> setDiscription(e.target.value)}/> 
           
            <button className='btn btn-success'>add</button>
        </form> 
    </Fragment>);
}

{/* <form className='d-flex mt-5' onSubmit={onSubmitForm}>
            <input type="text" className="form-control" value={discription} onChange={e=> setDiscription(e.target.value)}/> 
           
            <button className='btn btn-success'>add</button>
        </form> */}

export default InputTodo;