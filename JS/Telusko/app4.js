const express = require('express');

const app = express();

// This also works
// app.listen(9000)

// here we print something in console if port is connected
app.listen(9000, function(req,res)
{
    console.log('Running...');
});


// 
app.get('/',function(req,res){
    res.send('Hello World!!')
})


app.get('/alien',function(req,res){
    res.send("Welcome back aliens!!")
})


// accepting dynamic url
app.get('/alien/:id',function(req,res){
    const id = req.params.id;
    if(id == 200)
        res.send("hey Navin")
    else if(id==201)
        res.send("Hey Sam");
    else
        res.send("Hey Noone");
})