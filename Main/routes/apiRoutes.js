const router = require("express").Router();
const store = require("../db/store");

// This "gets" all of our notes from the database
router.get("/notes", (req, res) => {
  store
    .getNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});

//This then posts the notes that we get from the database to the front end
router.post("/notes", (req, res) => {
  store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

// This uses the specific ID number to delete the note intending to be deleted
router.delete("/notes/:id", (req, res) => {
  store
    .deleteNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
