//dependecies
const express = require('express');

//sets up express app
const app = express();
const PORT = 3000;

//sets up express application to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


