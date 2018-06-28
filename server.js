const express = require('express');
const app = express();
const bodyParser= require('body-parser')
 
const MongoClient = require('mongodb').MongoClient
const dburl= 'mongodb://mongouser:zew0lfen@ds121251.mlab.com:21251/mongz'
var db

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))




app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})
  })
})
// app.get('/', (req, res) => {
//     res.send('Hello World')
//   }) this send a responce back to the browser

// app.get('/', (req, res)=>{
//     // res.sendFile(__dirname+'/index.html')
//     db.collection('quotes').find().toArray(function(err, results) {
//       console.log(results)
//       // send HTML file populated with quotes here
//     })
      
  
// })
// app.get('/', (req, res) => {
//   var cursor = db.collection('quotes').find()
// })

app.post('/quotes', (req,res)=>{
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

MongoClient.connect(dburl, (err, mongz) => {
  if (err) return console.log(err)
  db = mongz.db('mongz') // whatever your database name is
  app.listen(8000, () => {
    console.log('listening on 8000')
})
})




  // app.listen(3000, () =>{
  //   console.log('listening on 3000')
  // })