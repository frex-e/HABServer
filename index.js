const express = require('express');
const app = express();
const PORT = 8080;
const fs = require('fs');

// Defines starting time
const startTime = Date.now()

// Defining todays date for log file
let current_date =new Date();
const logfile = `logs/${current_date.getFullYear()}-${current_date.getMonth()+1}-${current_date.getDate()}_${current_date.getHours()}:${current_date.getMinutes()}:${current_date.getSeconds()}.log`;

let current = {};
let log = [];

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
        log.push([(Date.now()-startTime)/1000,id,value])
        current[id] = value;
        display(()=>{
            console.table(current)
        })
        logData()
    }

})

// Saves log every minute
function logData() {
    let keys = Object.keys(current);
    let buffer = "time,";
    // Adds headers to the csv file.
    for (var i = 0; i < keys.length; i++){
        buffer = buffer + keys[i] + ","
    };
    //Writes buffer to file
    fs.writeFile(logfile,buffer,(err)=>{
        if (err) throw err;
        display(()=>{
            console.table(current);
            console.log("logfile updating!");

            for (const entry of log) {
                buffer = `${entry[0]}` + repeatStr(",", findIndexEqual(keys,entry[1])+1) +`${entry[2]}` + repeatStr(",", keys.length - findIndexEqual(keys, entry[1]));
                fs.appendFile(logfile, buffer, () => {
                    if (err) throw err;
                })
            }

        })
    });
}

function findIndexEqual(list,y){
    return list.findIndex((x)=>{if (x==y) return true})
}

// Quick little function to repeat strings
function repeatStr(str,num){
    let holder = ""

    for (var i = 0; i<num;i++){
        holder = holder + str

    }
    return holder

}
