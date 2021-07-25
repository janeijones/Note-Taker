const router = require ('express').Router();
const path = require('path');


router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('*', (req, res) => {
    console.log(__dirname); //where you are currently as absolute path
    res.sendFile(path.join(__dirname, '../public/index.html'));
    

});

module.exports = router; 