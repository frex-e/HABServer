const express = require('express');
const app = express();
const PORT = 8080;
let current = {};
app.use(express.json())

// Begins express server
app.listen(PORT,()=>{
    console.log("We're alive")
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
        current[id] = value;
        console.table(current);
        res.status(200).send();
    }

})