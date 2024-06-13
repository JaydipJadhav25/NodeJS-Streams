import express from "express"
import fs from "fs"
//import status moniter
import status from "express-status-monitor"

const app = express()
//set status moniter
app.use(status());


app.get('/', function (req, res) {
  res.send('Hello World')
fs.readFile("./sample.txt" , (err , data) =>{
    res.end(data)
})




})

app.listen(8000 , () =>{
    console.log(" server is reunning at PORT : 9000")
})