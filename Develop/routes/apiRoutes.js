const router = require ('express').Router();
const fs = require('fs')
const uuid = require('uuid');

router.get('/notes', (req, res) => {
   const db = fs.readFileSync('db/db.json', 'utf8');
   res.json(JSON.parse(db));

});

router.post('/notes', (req, res) => {
    console.log(req.body);
   // 1. read existing data from file
   const db = fs.readFileSync('db/db.json', 'utf8');
   //2. parse it back into javascript
   const newArray = JSON.parse(db);
   //3. push it back into the array
   req.body.id = uuid.v1();
   newArray.push(req.body);
   //4. parse it back into a string
   const updatedArrayString = JSON.stringify(newArray);
   //5. write it to the file
    fs.writeFileSync('db/db.json', updatedArrayString);
   //it ends up at the end of the arrray that was in the file
   res.json(req.body)
});

router.delete('/notes/:uuid', (req, res) => {
// 1. read existing data from file
const db = fs.readFileSync('db/db.json', 'utf8');
//2. parse it back into javascript
const newArray = JSON.parse(db);
//3. filter out the note that matches the uuid
const newFilteredArray = newArray.filter((note) => note.id !== req.params.uuid)

//4. parse it back into a string
const updatedArrayString = JSON.stringify(newFilteredArray);
//5. write it to the file
 fs.writeFileSync('db/db.json', updatedArrayString);

 res.status(204).send();
 //used for post, no reponse back on delete
})


module.exports = router; 