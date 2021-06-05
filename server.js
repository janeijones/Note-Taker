//dependecies
const express = require('express');
const path = require('path');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('../routes/apiRoutes');

//sets up express app
const app = express(); //creates express instance 
// const PORT = 3000;

//sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true})); //handles data from requests 
app.use(express.json()); //handles json data from requests

app.use('/api', apiRoutes)
app.use('/', htmlRoutes)


//set static folder
app.use(express.static(path.join(__dirname, 'public'))); //allows access to assets inside of public folder

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname,
});



//starts server to begin listening
// app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

app.listen(process.env.PORT || 3001, () => {

    console.log('listening on host');
});

