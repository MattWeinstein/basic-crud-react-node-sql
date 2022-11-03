const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors')
require('dotenv').config()
console.log(`${process.env.ROOT_PASSWORD}`)

app.use(cors())
app.use(express.json()) // Middleware to parse JSON

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'employee_system_crud',
    password: `${process.env.ROOT_PASSWORD}`
})

app.post('/create',(req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;
    /* Question marks will make the data secure. The second argument of an array will replace the question marks*/
    db.query('INSERT INTO employees (name,age,country,position,wage) VALUES (?,?,?,?,?)',
    [name,age,country,position,wage]),
    (err,res) =>{
        console.log('hello')
        if(err){
            console.log(err)
        } else{
            res.send("values inserted")
        }
    }
})

app.listen(3001,()=>{
    console.log('AYOO server running')
});