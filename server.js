//dependecies
const express = require('express');

//sets up express app
const app = express();
const PORT = 3000;

//sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!!');
});



//starts server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));


