const express = require("express");
const app = express();
// app.get("/", function(req, res){
    // res.send("<h1>hello world</h1>");
// })

app.get("/contact", function(req, res){
    res.send("")
})

app.get("/", function(req, res){
 
   res.sendFile(__dirname + "/form.html");
})

app.listen(5000, function(){
    console.log("server started on port 5000")
})