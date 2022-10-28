//npm install express
//node server.js to run the file
//localhost:3000 on the broswer
const { application } = require('express')
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//res.send => text
//res.json => json
//res.sendFile => File

//use arrow function ()=>{} req is request and res is respond
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/datarep', (req, res) => {
    res.send('Welcome to Data Representation & Querying')
})

//to use the parameters name we use : 
app.get('/hello/:name', (req, res) => {
    res.send('Hello ' + req.params.name);
})

app.get('/api/books', (req, res) => {
    const books = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
                "Kyle Banker",
                "Peter Bakkum",
                "Tim Hawkins",
                "Shaun Verch",
                "Douglas Garrett"
            ],
            "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }
    ]
//create variables mybooks and parse in books
//set status
    res.status(201).json({
        mybooks:books
    })
})

app.get('/test',(req,res)=>{
    //__dirname will return the current directory
    res.sendFile(__dirname+'/index.html')
})

//get method request going to /name
app.get('/name',(req,res)=>{
    console.log(req.query.fname)
    res.send("Hello " + req.query.fname + ' ' + req.query.lname)
})

//post method request
//npm install body-parser to create middleware
app.post('/name',(req,res)=>{
    console.log(req.body)
    res.send("Hello Post " + req.body.fname + ' ' + req.body.lname)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})