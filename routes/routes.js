
const fs = require('fs');
const path = require('path');

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });


    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    fs.readFile('db/db.json', "utf8", (err, data) => {
        const noteArray = JSON.parse(data)
        console.log(noteArray)
    })


    app.get("/api/notes", (req, res) => {
        res.JSON(noteArray)
    })


};