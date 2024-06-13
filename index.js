import express from "express"
import fs from "fs"
//import status moniter
import status from "express-status-monitor"

//inbuilt packege
import zlib from "node:zlib"


const app = express()
//set status moniter
app.use(status());


//stream read --> zipper -->  fs stream write
fs.createReadStream("./sample.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("./sample.zip"));




app.get('/', function (req, res) {
//   res.send('Hello World')
// fs.readFile("./sample.txt" , (err , data) =>{
//     res.end(data)
// })


//using streaming..

//create a reading stream
const stream = fs.createReadStream("./sample.txt" ,"utf-8");

//read a data from file and send a chunk in res
stream.on("data" , (chunk) => res.write(chunk));
//file data end to brek a req, res cyclie

stream.on("end" , () => res.end());


})

app.listen(8000 , () =>{
    console.log(" server is reunning at PORT : 9000")
})