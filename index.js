const express = require('express');
const app = express();
const PORT = 8080;
const fs = require('fs');

// Defining todays date for log file
let current_date =new Date();
const logfile = `${current_date.getFullYear()}-${current_date.getMonth()+1}-${current_date.getDate()}_${current_date.getHours()}:${current_date.getMinutes()}:${current_date.getSeconds()}`;

let current = {};

// JSON Parsing
app.use(express.json())

// Displays stuff nicely
function display(func){
    console.clear()
    console.log(`Alive at port: ${PORT}`)
    console.log(`Logging to file ${logfile}`)
    func()
}


// Begins express server
app.listen(PORT,()=>{
    display(()=>console.log(""))
})



//Listents at /post/
app.post('/post/:id',(req,res)=>{
    const { id } = req.params;
    const { value } = req.body;

    // Checks for value, if empty, rejects
    if (!value) {
        res.status(418).send({message:"No value"})

    // Adds value to table and stores locally
    } else {
        res.status(200).send();
        current[id] = value;
        display(()=>{
            console.table(current)
        })
    }

})
