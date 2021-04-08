
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

        if (err) console.log(err)

        let noteArray = JSON.parse(data)
        console.log(noteArray)



        app.get("/api/notes", (req, res) => {
            res.json(noteArray)
        })


        app.post("/api/notes", (req, res) => {
            let addNote = req.body;
            noteArray.push(addNote)
            console.log(noteArray)
            renderNotes()

        })

        function renderNotes() {
            fs.writeFile("dd/db.json", noteArray, err => {
                if (err) console.log(err)
            })
        }
    })




};