//dependecies
const express = require('express');
const path = require('path');

//sets up express app
const app = express();
const PORT = 3000;

//sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname,
});



//starts server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));


