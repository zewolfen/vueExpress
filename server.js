const express = require('express');
const app = express();
const bodyParser= require('body-parser')
 
const MongoClient = require('mongodb').MongoClient
const dburl= 'mongodb://mongouser:zew0lfen@ds121251.mlab.com:21251/mongz'

app.use(bodyParser.urlencoded({extended: true}))



// app.get('/', (req, res) => {
//     res.send('Hello World')
//   }) this send a responce back to the browser

app.get('/', (req, res)=>{
    res.sendfile(__dirname+'/index.html')
})
app.post('/quotes', (req,res)=>{
console.log(req.body)
})
 

MongoClient.connect(dburl, (err, mongz) => {
  if (err) return console.log(err)
  var db = mongz.db('mongz') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
})
})




  // app.listen(3000, () =>{
  //   console.log('listening on 3000')
  // })