const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors')
require('dotenv').config()

app.use(cors());
app.use(express.json()); // Middleware to parse JSON

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'employee_system_crud',
    password: `${process.env.ROOT_PASSWORD}`
});

app.post('/create',(req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;

    db.query('INSERT INTO employees (name,age,country,position,wage) VALUES (?,?,?,?,?)',
    [name,age,country,position,wage],
    (err,results) => {
        if(err){
            console.log(err)
        } else{
            res.send('something')
        }
    })
})

app.get('/employees',(req,res) => {
    db.query('SELECT * FROM employees',(err,result) => {
        if(err){
            console.log(err)
        } else{
            res.send(result)
        }
    })
})

app.listen(3001,()=>{
    console.log('AYOO server running')
});