/*********************************************************************************
* WEB422 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source 
* (including websites) or distributed to other students.
*
* Name: Marco Schiralli     Student ID: 118649219    Date: 01/15/23
* Cyclic Link:  
*
********************************************************************************/ 

const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require('body-parser');
const cors = require("cors")
const MoviesDB = require("./modules/moviesDB.js")
const db = new MoviesDB()
const mongoose = require('mongoose');
const { query } = require('express');

require('dotenv').config()

app.use(cors())
app.use(express.json())

const HTTP_PORT = process.env.PORT ||8080;

app.get('/', (req,res) => {
    res.json({message:"API Listening"})
})

app.post('/api/movies', (req,res) => {
    db.addNewMovie(req.body).then((data)=>{
        res.status(201).json(data)
    })
    .catch((err)=>{
        res.status(500).json({error: err})
    })
})

app.get('/api/movies', (req,res) => {

    let page = req.query.page
    let title = req.query.title
    let perPage = req.query.perPage

    db.getAllMovies(page,perPage,title).then((data) => {
        res.status(201).json(data)
    }).catch((err) => {
        res.status(500).json({error:err})

    })
})

app.get('/api/movies/:id', (req, res) => {

    db.getMovieById(req.params.id).then((data) =>{
        res.status(201).json(data)
    }).catch((err) => {
        res.status(500).json({error:err})

    })
})

app.put('/api/movie/:id', (req, res) => {

    db.updateMovieById(req.body, req.params.id).then((data) =>{
        res.json({message: "Movie has been updated"})

    })
    .catch((err) =>{
        res.status(500).json({error:err})
    })

})

app.delete('/api/movie/:id' , (req,res) =>{
    db.deleteMovieById(req.params.id).then((data) => {
        res.json({message: "Movie has been deleted"})

    }).catch((err) =>{
        res.status(500).json({error:err})
    })
})


db.initialize(process.env.MONGODB_CONN_STRING).then(()=>{
    app.listen(HTTP_PORT, ()=>{
        console.log(`server listening on: ${HTTP_PORT}`);
    });
}).catch((err)=>{
    console.log(err);
});



