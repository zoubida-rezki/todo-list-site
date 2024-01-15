// OUR SERVER / API
const express = require('express'); //to create servers
const app= express();
const cors=require('cors'); // to conext servers
const pool = require('./db'); // we use this to run quries with postgress

//middleware
app.use(cors());
app.use(express.json());

//Routes//

//create a todo
app.post('/todos', async(req,res)=>{
try {
   // we got req.body from express.json
   console.log(req.body);
   console.log("meow")
   const {discription} = req.body;
   console.log(discription);
   const newTodo = await pool.query(
    "INSERT INTO todo (discription) VALUES($1) RETURNING *",[discription] // We use RETURNING * to make sure we are returning the data
       );

       res.json(newTodo.rows[0]);
} catch (error) {
    console.error(error.message);
}
})
//get all todos
app.get('/todos', async(req,res)=>{
    try {
        // console.log(req.params)

        const alltodos = await pool.query('SELECT * FROM todo');
        res.json(alltodos.rows)
    } catch (error) {
        console.error(error.message)
    }
})

//get a todo
app.get('/todos/:id',async(req,res)=>{
    try {
        console.log(req.params)
        const {id}= req.params;
        console.log(id)
        const todo = await pool.query('SELECT * FROM todo WHERE todo_id= $1',[id])
        res.json(todo.rows[0]);
    } catch (error) {
        console.error(error.message)
    }
})


//update a todo
app.put('/todos/:id', async(req,res)=>{
    try {
        const {id} =req.params;
        const {discription}=req.body;
        console.log(id)
        console.log(discription)
        const updateTodo = await pool.query('UPDATE todo SET discription =$1 WHERE todo_id= $2',[discription,id]);
        res.json('Todo was updated');
    } catch (error) {
        console.error(error.message)
    }
})

//delete a todo
app.delete('/todos/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        console.log(id)
        const deletetodo = await pool.query('DELETE FROM todo WHERE todo_id = $1',[id]);
        res.json('todo was deleted');
    } catch (error) {
     console.error(error.message);
    }
})


app.listen(5000, ()=>{
console.log('server has started on port 5000');
});
