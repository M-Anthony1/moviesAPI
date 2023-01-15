const exp = require('express')
const app = exp()
const path = require('path');
// const bodyParser = require('body-parser');
const cors = require("cors")
const MoviesDB = require("./modules/moviesDB.js")
const db = new MoviesDB()
const mongoose = require('mongoose')

require('dotenv').config()

app.use(cors())
app.use(express.json())


app.get('/', function(req,res){
    res.json({message:"API Listening"})
})

app.post('/api/movies', function(req,res){
    
})

db.initialize(process.env.MONGODB_CONN_STRING).then(()=>{
    app.listen(HTTP_PORT, ()=>{
        console.log(`server listening on: ${HTTP_PORT}`);
    });
}).catch((err)=>{
    console.log(err);
});


const port = process.env.PORT ||8080;
app.listen(port);