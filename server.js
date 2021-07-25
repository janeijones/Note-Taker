const express = require('express');
const path = require('path');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');


const app = express();

//sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true})); //handles data from requests 
app.use(express.json()); //handles json data from requests

// set static folder
app.use(express.static(path.join(__dirname, 'public'))); //allows access to assets inside of public folder

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);





app.listen(process.env.PORT || 3001, () => {
  console.log('listening on http://localhost:3001');
});